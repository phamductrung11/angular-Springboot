import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public loggedType: string;
  constructor(
    private _router:Router,
    public auth_type:AuthService
  ) {
  
   }

  ngOnInit(): void {
    this.navigation();
  }
  navigation(){
    if (this.auth_type.authType() == null) {
      this.loggedType = "home";
    } else {
      if (this.auth_type.authType() == "Customer") {
        this.loggedType = "customer";
      } else if (this.auth_type.authType() == "Admin") {
        this.loggedType = "admin";
      }
    }
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('auth_type');
    this._router.navigateByUrl("login");
  }

}
