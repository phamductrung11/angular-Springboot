import { UploadService } from 'src/app/Service/upload.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/products';
import { OrderService } from 'src/app/Service/order.service';
import {ApiService} from '../../Service/api.service';
import { OrderDetails } from 'src/app/Model/order';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public product:Product[]=[]
  constructor(
    public UploadService:UploadService,
    public apiService:ApiService,
    public orderService:OrderService,
  ) { }

  ngOnInit(): void {
    this.LoadData();
  }
  LoadData(){
    this.apiService.getProducts().subscribe(data=>{
      this.product=data;
      this.loadImages();
    })

  }
  loadImages() {
    if (this.product && this.product.length > 0) {
      this.product.forEach(item => {
        this.loadImage(item);
      });
    }
  }

  loadImage(item: Product) {
    this.UploadService.getBlobThumbnail(item.imageUrl.toString()).subscribe(
      (res) => {
        this.createImageFromBlob(res, item);
      }
    );
  }
  createImageFromBlob(image: Blob, item: Product) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        item.imageDate = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  addToCard(card:any){
  if (card) {
    let storeDataGet = JSON.parse(localStorage.getItem('localCart') || '[]');
   card.quantity = 1;
   let index = this.findIndex(card.id,storeDataGet);
   if (index != -1) {
     storeDataGet[index].quantity += card.quantity;
   }else{
     const order =new OrderDetails();
     order.productId=card.id;
     order.quantity=card.quantity;
     order.productName=card.name;
     order.productPrice=card.price;
    storeDataGet.push(order);
   }

   localStorage.setItem('localCart', JSON.stringify(storeDataGet));
  }

  }
  findIndex(id:number,storeDataGet:any){
    var index = -1
   for (let i = 0; i < storeDataGet.length; i++) {
     if (storeDataGet[i].productId==id) {
      index =i
      break;
     }

   }
   return index
  }


}
