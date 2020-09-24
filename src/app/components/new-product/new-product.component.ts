import { Component, OnInit } from '@angular/core';
import { APIService } from './../../services/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  idStore: string = environment.storeId;

  constructor(public API: APIService) { }

  onSubmit(form) {
    const payload = form.value;
    this.API.addProduct(this.idStore, payload).subscribe((res: any) => {
      console.log('PRODUCT ADDED', res);
    }, err => {
      console.log('KO', err);
    });
    form.reset();
    this.API.loadProducts(this.idStore);
    // console.log(form.value);
  }

  ngOnInit() {
  }

}
