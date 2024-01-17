import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FoodPageComponent } from '../food-page/food-page.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FoodPageComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  foods:Food[] = [];
  searchText: string = ''; //si asta e pt searchbar
  selectedTags: string[] = [];//asta e pt tag bars
  displayedTags: string[] = ['Fast Food', 'Main Course', 'Dessert'];

  constructor(private foodService:FoodService, private router:Router){
    this.foods = foodService.getAll();
  }
  
  ngOnInit(): void {
  }

  navigateToFoodDetails(foodId: string): void {
    console.log('Navigating to food details:', foodId);
    const numericFoodId: number = +foodId;
    this.router.navigate(['/food', numericFoodId]);
  }

  //pt searchbar de aici in jos
  filterFoods(): Food[]{
    return this.foods.filter((food) => {
      const matchesSearch = !this.searchText || food.tags?.some(tag => tag.toLowerCase().includes(this.searchText.toLowerCase()));
      const matchesTags = this.selectedTags.length === 0 || food.tags?.some(tag => this.selectedTags.includes(tag));
      return matchesSearch && matchesTags;
    });
  }
  //pana aici
  toggleTag(tag: string): void {
    const index = this.selectedTags.indexOf(tag);
    if (index !== -1) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
  }

  getAllTags(): string[] {
    const tagsSet = new Set<string>();
    this.foods.forEach((food) => {
      if (food.tags) {
        food.tags.forEach((tag) => {
          tagsSet.add(tag);
        });
      }
    });
    return Array.from(tagsSet);
  }

  getAllTagsFromFoods(foods: Food[]): string[] {
    const tagsSet = new Set<string>();
    foods.forEach((food) => {
      tagsSet.add(food.name); // Add the food name as a tag
      if (food.tags) {
        food.tags.forEach((tag) => {
          tagsSet.add(tag);
        });
      }
    });
    return Array.from(tagsSet);
  }

}