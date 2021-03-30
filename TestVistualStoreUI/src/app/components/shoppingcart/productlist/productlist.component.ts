import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: Product[] = []
  wishlist: number[] = []

  constructor( private productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.loadProducts();   
  }

  AddToCart(cartitem){
    this.cartService.saveCartItem(cartitem);
    
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }
  
}
