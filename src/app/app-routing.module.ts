import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from '@layout/mainpage/mainpage.component';
import { HomeModule } from '@modules/home/home.module';
import { ProductViewModule } from '@modules/product-view/product-view.module';
import { BrandViewModule } from '@modules/brand-view/brand-view.module'; 
import { PriceListViewModule } from '@modules/price-list-view/price-list-view.module';
import { PriceListDetailsViewModule } from '@modules/price-list-details-view/price-list-details-view.module';
const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('@modules/home/home.module').then((m): typeof HomeModule => m.HomeModule)

      },
      {
        path: 'Product',
        loadChildren: () => import('@modules/product-view/product-view.module').then((m): typeof ProductViewModule => m.ProductViewModule),
     },
      {
        path: 'Brand',
        loadChildren: () => import('@modules/brand-view/brand-view.module').then((m): typeof BrandViewModule => m.BrandViewModule),
   },
   {
     path: 'PriceList',
     loadChildren: () => import('@modules/price-list-view/price-list-view.module').then((m): typeof PriceListViewModule => m.PriceListViewModule),
},
{
  path: 'PriceListDetails',
  loadChildren: () => import('@modules/price-list-details-view/price-list-details-view.module').then((m): typeof PriceListDetailsViewModule => m.PriceListDetailsViewModule),
}
    ]

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
