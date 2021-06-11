import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm:FormGroup
  constructor(
    private _formsBuilder:FormBuilder
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

}
