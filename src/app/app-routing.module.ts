import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProductsComponent } from './component/products/products.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'',component:HomepageComponent
  },
  {
    path:'about',component:AboutComponent 
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'cart',component:CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
