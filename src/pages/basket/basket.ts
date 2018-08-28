import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasketProvider } from '../../providers/basket';

/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {

  items = [];
  total = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public basketProvider: BasketProvider
  ) {

  }

  ionViewDidLoad() {
    this.basketProvider.get().then((data) => this.items = data);
    this.total = this.basketProvider.getTotal();
    console.log('ionViewDidLoad BasketPage');
  }

}
