import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductLitComponent} from "./products/product-lit.component";
import {FormsModule} from "@angular/forms";
import {convertToParamMap, RouterModule} from "@angular/router";
import {ConvertToSpacesPipi} from "../share/convert-to-spaces.pipi";
import {StarComponent} from "./star/star.component";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,ProductLitComponent,ConvertToSpacesPipi,StarComponent, ProductDetailsComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "products",component: ProductLitComponent},
      {path: "home",component: HomeComponent},
      {path: "products/:id",component: ProductDetailsComponent},
      {path:"",component:ProductLitComponent},
      {path:"**",redirectTo:"products",pathMatch:"full"}
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
