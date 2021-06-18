import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output('addCard') addCard=new EventEmitter();
@Input('product') product:any;
  constructor() { }

  ngOnInit(): void {
  }
  addToCard(product:any){
    this.addCard.emit(product);
  }

}
