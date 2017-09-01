import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccssComponent } from './order-succss/order-succss.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccssComponent,
    ShopingCartComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'Products', component: ProductsComponent },
      { path: 'cart', component: ShopingCartComponent },
      { path: 'myorders', component: MyOrdersComponent },
      { path: 'checkout', component: CheckOutComponent },
      { path: 'order-success', component: OrderSuccssComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin/orders', component: AdminOrdersComponent },
      { path: 'admin/products', component: AdminProductsComponent },
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
