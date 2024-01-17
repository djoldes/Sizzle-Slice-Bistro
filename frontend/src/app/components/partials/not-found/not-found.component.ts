import { Component, Input, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
  
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Nothing found!";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute = "/";
  constructor(){  }

  ngOnInit(): void {
  }

}
