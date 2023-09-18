import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from '@layout/mainpage/mainpage.component';
import { HomeModule } from '@modules/home/home.module';
import { ProductViewModule } from '@modules/product-view/product-view.module';
import { BrandViewModule } from '@modules/brand-view/brand-view.module'; 
import { PriceListViewModule } from '@modules/price-list-view/price-list-view.module';
import { PriceListDetailsViewModule } from '@modules/price-list-details-view/price-list-details-view.module';
import { WarehousesViewModule } from '@modules/warehouses-view/warehouses-view.module';
import { InputsViewModule } from '@modules/inputs-view/inputs-view.module';
const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
    children: [
      {
        path: '',
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
}   ,   {
  path: 'Warehouse',
  loadChildren: () => import('@modules/warehouses-view/warehouses-view.module').then((m): typeof WarehousesViewModule => m.WarehousesViewModule)

},
{
  path: 'Inputs',
  loadChildren: () => import('@modules/inputs-view/inputs-view.module').then((m): typeof InputsViewModule => m.InputsViewModule)

},
    ]

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
