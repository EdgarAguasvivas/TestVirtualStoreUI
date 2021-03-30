import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartitem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = new Array<Product>()
  cartTotal = 0

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();  
  }

  loadCartItems() {   
    this.cartItems = this.cartService.listCartItemsLocalStorage;
    this.calcCartTotal();
    debugger;
  }

  calcCartTotal() {
    this.cartTotal = 0;
    for (var i = 0; i <= this.cartItems.length; i++) {
      this.cartTotal += (this.cartItems[i].quantity == undefined ? 0 : this.cartItems[i].quantity * this.cartItems[i].price == undefined ? 0 : this.cartItems[i]?.price)
    }   
}
}
