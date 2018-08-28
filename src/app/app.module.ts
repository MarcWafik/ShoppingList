import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { BasketPage } from '../pages/basket/basket';
import { ItemPage } from '../pages/item/item';
import { ItemsProvider } from '../providers/items';
import { BasketProvider } from '../providers/basket';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    BasketPage,
    ItemPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    BasketPage,
    ItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ItemsProvider,
    BasketProvider
  ]
})
export class AppModule { }
