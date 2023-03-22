import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { FooterComponent } from './component/footer/footer.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProductsComponent } from './component/products/products.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ComponentComponent } from './component/component.component';
import { CartComponent } from './component/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
        FooterComponent,
    HomepageComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    ComponentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
