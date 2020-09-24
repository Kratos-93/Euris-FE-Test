import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { CardReviewComponent } from './components/card-product/card-review/card-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardProductComponent,
    SpinnerComponent,
    NewProductComponent,
    CardReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
