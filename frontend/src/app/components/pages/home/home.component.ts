import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  foods:Food[] = [];
  searchText: string = ''; //si asta e pt searchbar
  constructor(private foodService:FoodService, private router:Router){
    this.foods = foodService.getAll();
  }
  
  ngOnInit(): void {
  }

  navigateToFoodDetails(foodId: string): void {
    const numericFoodId: number = +foodId;
    this.router.navigate(['/food', numericFoodId]);
  }

  //pt searchbar de aici in jos
  filterFoods(): Food[]{
    if(!this.searchText){
      return this.foods;
    }
    return this.foods.filter((food) => 
      food.tags?.some((tag) => tag.toLowerCase().includes(this.searchText.toLowerCase()))
      );
  }
  //pana aici
}