import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  cartQuantity = 0;

  constructor(cartService: CartService, private authService: AuthenticationService){
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
    
  }

  get isAuthenticated(): boolean{
    return this.authService.getIsAuthenticated();
  }

  get username(): string{
    return this.authService.getUsername();
  }

  logout(): void{
    this.authService.logout();
  }
  
  ngOnInit(): void {
  }
}
