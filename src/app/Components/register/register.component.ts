import { Router } from '@angular/router';
import { UserModel } from './../../Model/user';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {AuthService} from'../../Service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm:FormGroup
  constructor(
    public router:Router,
    private _formsBuilder:FormBuilder,
    private _authServer:AuthService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.registerForm=this._formsBuilder.group({
      email:[''],
      username:[''],
      password:[''],
      age:['']
    })
  }
  onSubmit(){
    let user= this.registerForm.value;
    this._authServer.register(user).subscribe(res=> {
    if (res) {
      this.router.navigate(['/login']);
    }
    },
      err => {
        alert("An error has occured, Please try again !!!");
      });
}


}
