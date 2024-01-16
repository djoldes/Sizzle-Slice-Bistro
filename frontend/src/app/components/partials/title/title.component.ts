import { Component, Input, OnInit} from '@angular/core';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-title',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit{
  
  constructor(){}

  @Input()
  title!: string;

  @Input()
  margin? = "1rem 0 1rem 0.2rem";

  @Input()
  fontsize? = "1.7rem"; 
  
  ngOnInit(): void {
  }
}
