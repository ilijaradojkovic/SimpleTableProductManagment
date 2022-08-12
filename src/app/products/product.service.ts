import {Injectable} from "@angular/core";
import {Product} from "./product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn:"root"
})
export  class ProductService{

  private productUrl="api/products/products.json"
  constructor(private http:HttpClient) {
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)

  }
}
