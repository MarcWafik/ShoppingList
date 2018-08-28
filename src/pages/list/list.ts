import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { BasketPage } from '../basket/basket';
import { ItemsProvider } from '../../providers/items';
import { BasketProvider } from '../../providers/basket';

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  sortingTypes = ["price_desc", "price_asc", "salesrank", "default"];
  sorting = "default";
  searchBar = false;

  basketLength = 0;
  selectedItem: any;
  icons: string[];
  items;
  q;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemProvider: ItemsProvider,
    public basketProvider: BasketProvider
  ) {
    itemProvider.get({ sorting: this.sorting }).subscribe((data: any) => {
      this.items = data.products;
      console.log(this.items);
    });
  }

  ionViewDidLoad() {
    this.basketLength = this.basketProvider.items.length;
  }

  doInfinite() {
    this.itemProvider.get({ sorting: this.sorting, offset: this.items.length, q: this.q }).subscribe((data: any) => {
      this.items = this.items.concat(data.products);
      console.log(this.items);
    });
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ItemPage, {
      item: item
    });
  }

  search(event) {
    this.q = event.target.value;
    this.reset();
  }

  searchBarToggle() {
    this.searchBar = !this.searchBar;
  }

  goToShoppingChart() {
    this.navCtrl.push(BasketPage);
  }

  addToShoppingChart(item) {
    this.basketProvider.add(item).then(() => {
      this.basketLength = this.basketProvider.items.length
    });
    this.navCtrl.push(BasketPage);
  }

  reset() {
    this.q = null;
    this.items = [];
    this.doInfinite();
    this.searchBar = false;
  }
}
