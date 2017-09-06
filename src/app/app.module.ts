import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {AppRooting} from './rooting/app-rooting';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { ArticleComponent } from './components/article/article.component';
import { APIS, BASE_PATH } from './swagger/index';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ArticleComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRooting
  ],
  providers: [
    APIS,
    {provide: BASE_PATH, useValue: environment.uriPath}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
