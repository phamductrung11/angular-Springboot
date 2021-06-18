export class Order {
  approved:	boolean;
  id:	number;
  orderBy:	string
  orderDetails: OrderDetails[];
  userId: number;
}

export class OrderDetails  {
  id: number;
  productName: string;
  productId: number;
  orderId: number;
  quantity: number;
  productPrice : number;
}
