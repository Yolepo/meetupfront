import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from '../components/cart/cart.component';
import {ArticleComponent} from '../components/article/article.component';


const routes: Routes = [
  {path: '', redirectTo: '/cart', pathMatch: 'full'},
  {path: '#/', redirectTo: '/cart', pathMatch: 'full'},
  {path: 'cart', component: CartComponent},
  {path: 'article', component: ArticleComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRooting {
}
