// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodService } from './services/food.service';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'food/:id', component: FoodService },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,],
})
export class AppRoutingModule {}
