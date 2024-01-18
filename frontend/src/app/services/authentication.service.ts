import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated:boolean = false;
  private username:string = '';

  login(user: string, password:string):boolean{
    if(user === 'testuser' && password === 'testpassword'){
      this.isAuthenticated = true;
      this.username = user;
      return true;
    }
    return false;
  }

  logout():void{
    this.isAuthenticated = false;
    this.username = '';
  }

  getIsAuthenticated():boolean{
    return this.isAuthenticated;
  }

  getUsername():string{
    return this.username;
  }

  constructor() { }
}
