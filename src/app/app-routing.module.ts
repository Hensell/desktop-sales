import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from '@layout/mainpage/mainpage.component';
import { HomeModule } from '@modules/home/home.module';
import { ProductViewModule } from '@modules/product-view/product-view.module';
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
        loadChildren: () => import('@modules/product-view/product-view.module').then((m): typeof ProductViewModule => m.ProductViewModule)

      }
    ]

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
