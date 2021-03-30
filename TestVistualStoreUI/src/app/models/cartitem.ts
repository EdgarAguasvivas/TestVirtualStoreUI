  
import { Product } from './product';

export class CartItem {
  id: number = 0;
  product_code: string = '';
  product_name: string = '';
  quantity: number = 0;
  price: number = 0;

  constructor(product?: Product) {
    if(product != null)
    {
      this.id = product.id;
      this.product_code = product.product_code;
      this.product_name = product.product_name;
      this.price = product.price;
      this.quantity = 1;
    }

    this.id = this.id;
      this.product_code = this.product_code;
      this.product_name = this.product_name;
      this.price = this.price;
      this.quantity = this.quantity;
  }
}