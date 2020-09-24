import { APIService } from './../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  idStore: string = environment.storeId;
  showProduct: Boolean = true;
  @Input() productId: string;
  @Input() productTitle: string;
  @Input() productDescription: string;
  @Input() productPrice: number;
  @Input() category: string;
  @Input() employee: string;
  @Input() reviews: string;

  constructor(public API: APIService) { }

  update() {
    this.showProduct = false;
    console.log('show product changed');
  }

  deleteProduct() {
    this.API.deleteProducts(this.idStore, this.productId, this.update());
  }

  ngOnInit() {
  }

}
