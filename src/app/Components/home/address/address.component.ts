import { Address } from './../../../Model/address';
import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/Service/address.service';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  public address:Address=new Address();

  constructor(
    public router:Router,
    public addressService:AddressService,
    public authService:AuthService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const userId=this.authService.getuser_id();
    this.address.userId=parseInt(userId);
    this.addressService.postAddress(this.address).subscribe(data=>{
      console.log(data);
    })
    this.router.navigateByUrl('/home');

  }

}
