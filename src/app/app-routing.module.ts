import { ProductListComponent} from './modules/shop/components/product-list/product-list.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
