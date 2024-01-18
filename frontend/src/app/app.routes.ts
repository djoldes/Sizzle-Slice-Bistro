// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodService } from './services/food.service';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'food/:id', component: FoodService },
  { path: 'food/:id', component: FoodPageComponent},
  { path: 'cart-page', component: CartPageComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [LoginComponent, RouterModule, FoodPageComponent, BrowserModule, FormsModule, RouterModule.forRoot(routes),],
  exports: [RouterModule,],
  providers: [AuthenticationService],
})
export class AppRoutingModule {}
