import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})

export class APIService {

  context: string = environment.context;
  getStoreData$: Observable<any>;
  getProductsData$: Observable<any>;
  showSpinner = false;

  constructor(private http: HttpClient) { }

  getStores() {
    return this.http.get(this.context, httpOptions);
  }

  getStore(idStore: string) {
    return this.http.get(this.context + '/' + idStore, httpOptions);
  }

  getProducts(idStore: string) {
    return this.http.get(this.context + '/' + idStore + '/products/', httpOptions);
  }

  getProduct(idStore: string, idProduct: string) {
    return this.http.get(this.context + '/' + idStore + '/products/' + idProduct, httpOptions);
  }

  deleteProduct(idStore: string, idProduct: string) {
    return this.http.delete(this.context + '/' + idStore + '/products/' + idProduct, httpOptions);
  }

  addProduct(idStore: string, data: object) {
    return this.http.post(this.context + '/' + idStore + '/products/', data, httpOptions);
  }

  getCategories(idStore: string) {
    return this.http.get(this.context + '/' + idStore + '/stats/categories', httpOptions);
  }

  spinnerToggle() {
    this.showSpinner === false ? this.showSpinner = true : this.showSpinner = false;
  }

  loadStores() {
    this.spinnerToggle();
    this.getStoreData$ = this.getStores().pipe(tap((res: any) => {
      // console.log('OK', res);
      this.spinnerToggle();
      // return res;
    }, err => {
      console.log('KO', err);
      this.spinnerToggle();
    }));
  }

  loadProducts(idStore) {
    this.spinnerToggle();
    this.getProductsData$ = this.getProducts(idStore).pipe(tap((res: any) => {
      // console.log('OK', res);
      this.spinnerToggle();
      // return res;
    }, err => {
      console.log('KO', err);
      this.spinnerToggle();
    }));
  }

  deleteProducts(idStore, idProduct, callback) {
    this.deleteProduct(idStore, idProduct).subscribe((res: any) => {
      console.log('DELETED', res);
      callback();
    }, err => {
      console.log('KO', err);
    });
  }

}
