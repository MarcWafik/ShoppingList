import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BasketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BasketProvider {

  items = [];

  constructor(public http: HttpClient) {
    console.log('Hello BasketProvider Provider');
  }

  async get() {
    return this.items;
  }

  async add(item, quantity = 1) {
    this.items.push({ item: item, quantity: quantity });
  }

  getTotal() {
    var price = 0;
    this.items.forEach(element => price += element.item.prices.price * element.quantity);
    return price;
  }

}
