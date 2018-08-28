import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ItemsProvider Provider');
  }

  // https://www.bringmeister.de/api/products?limit=60&offset=0&q=mil&sorting=default
  get({ limit = 20, offset = 0, sorting = "default", q = null }) {
    let query = `&q=mil`;
    return this.http.get(`https://www.bringmeister.de/api/products?limit=${limit}&offset=${offset}&sorting=${sorting}`);
  }

}
