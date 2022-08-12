import {Component, OnDestroy, OnInit} from "@angular/core";
import {Product} from "./product";
import {ProductService} from "./product.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector:"pm-products",
  templateUrl:'./product-lit.component.html',

})
export class ProductLitComponent implements  OnInit,OnDestroy{

pageTitle:string="Product List";
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;
sub?:Subscription
errorMessage:string=""
  buttonText:"Show Image"|"Hide Image"="Show Image"
  private _listFilter:string="";

  constructor(private productService:ProductService) {
  }

  get listFilter():string{
    return this._listFilter;
  }
  filteredProducts:Product[]=[];
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.performFilter(value);
  }
products:Product[]=[]

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe(
      {
        next: products => {
          this.products = products
          console.log(this.products)
          this.filteredProducts = this.products
          this._listFilter = ""
        },
        error: err => this.errorMessage = err,
        complete: () => {

        }
      }
    )


  }

  toggleImage(){
  this.showImage=!this.showImage
    this.buttonText= !this.showImage ? "Show Image" : "Hide Image"
  }

  private performFilter(value: string):Product[] {
   return this.products.filter(x=>x.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }
  onRatingClicked(message:string){
    this.pageTitle+=message;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}

