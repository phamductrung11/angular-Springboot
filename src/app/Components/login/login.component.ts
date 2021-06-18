import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public auth_type:string;
  public loginForm:FormGroup;
  constructor(
    public router:Router,
    private _authServe:AuthService,
    private _formBuilder :FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForms();
  }
  createForms(){
  this.loginForm=this._formBuilder.group({
    username:['',],
    password:['']
  })
  }
  onSubmit(){
    let user= this.loginForm.value;
    this._authServe.login(user).subscribe(res=> {
    if (res) {
      for (let key in res.roles) {
        this.auth_type=res.roles[key].nameRole;
        if (res.roles[key].nameRole == "Customer") {
          this.router.navigate(['/home']);
          break;
        }else if(res.roles[key].nameRole == "Admin"){
          this.router.navigate(['/admin']);
          break;
        }
        
      }
     
      this._authServe.setToken(res.token,this.auth_type,res.id);
      
    }
    },err => {
          alert("An error has occured, Please try again !!!");
        });

}
}
