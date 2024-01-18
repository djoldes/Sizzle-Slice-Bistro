import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  ngOnInit(): void {
  }

  constructor(private authService: AuthenticationService, private router: Router){}

  username: string = '';
  password: string = '';

  login(): void{
    if(this.authService.login(this.username, this.password)){
      console.log('Login Succesful');
      this.router.navigate([''])
    } else{
      console.log('Login Failed');
    }
  }

}
