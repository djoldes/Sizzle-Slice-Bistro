import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  foods:Food[] = [];
  constructor(private foodService:FoodService, private router:Router){
    this.foods = foodService.getAll();
  }
  
  ngOnInit(): void {
  }

  navigateToFoodDetails(foodId: string): void {
    const numericFoodId: number = +foodId;
    this.router.navigate(['/food', numericFoodId]);
  }

}