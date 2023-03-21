import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'',component:HomepageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
