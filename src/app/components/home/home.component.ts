import { APIService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idStore: string = environment.storeId;
  storeData;

  constructor(public API: APIService) {
    this.API.loadStores();
    this.API.loadProducts(this.idStore);
  }

  ngOnInit() {
    // console.log(this.API.getStores().subscribe());
    // console.log(this.API.getProducts(this.idStore).subscribe());
  }

}
