import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartitem';
import { Product } from 'src/app/models/product';
import { Sale } from 'src/app/models/sale';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  productList: Product[] = []
  cartItems = new Array<CartItem>()
  cartTotal = 0
  sale: Sale = new Sale();

  constructor(private productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.loadProducts(); 
    this.loadCartItems();   
  }

  AddToCart(cartitem){
    this.cartService.saveCartItem(cartitem);
    this.loadCartItems();   
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
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

  payCartItems(){
    
    // for(let item of this.cartItems){
    //   this.sale.ID_Product = item.id;
    //   this.sale.ID_User = parseInt(this.cartService.getIdUserAuthenticate());
    //   this.sale.Date = new Date();
    //   this.sale.Quantity = 1;
    //   this.sale.Total = car
    // }
    // this.cartService.payCartItems().subscribe(    
    //   data =>    
    //   {      
    //     this.formLogin.reset();
    //     localStorage.setItem("UserName",data.user_Name);   
    //     localStorage.setItem("isAuthenticate","true");     
    //     this.router.navigate(['/dashboard']);
       
    //   }); 
  }

}
