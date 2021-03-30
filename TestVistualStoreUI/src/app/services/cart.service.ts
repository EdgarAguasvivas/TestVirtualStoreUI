import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { CartItem } from '../models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  Url :string;  
  cartitem: CartItem = new CartItem();
  header : any;

  constructor(private http: HttpClient) { 
    this.cartitem = this.oldCartItem;
    this.Url = 'https://localhost:5001/api/Sales';

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }

 
  saveLocaleStorage()
  {
    localStorage.setItem("cartItemsOld",JSON.stringify(this.cartitem))
  }

  get oldCartItem(): CartItem
  {
    let cartitemsLocaleStorage: CartItem = new CartItem(JSON.parse( localStorage.getItem("cartItemsOld") || '[]'));

    if(cartitemsLocaleStorage == null)
    {
      return new CartItem();
    }
    else
    {
      return cartitemsLocaleStorage;
    }
  }

  saveCartItem(cartModel?:CartItem)
  {
    if(cartModel != null){
      let listCartItem: CartItem[] = new Array<CartItem>();
    listCartItem = this.listCartItemsLocalStorage;
    listCartItem.push(cartModel);
    localStorage.setItem("cartItem",JSON.stringify(listCartItem))
    localStorage.removeItem("cartItemsOld")
    this.cartitem = new CartItem(undefined)
    return;
    }
    let listCartItem: CartItem[] = new Array<CartItem>();
    listCartItem = this.listCartItemsLocalStorage;
    listCartItem.push(this.cartitem);
    localStorage.setItem("cartItem",JSON.stringify(listCartItem))
    localStorage.removeItem("cartItemsOld")
    this.cartitem = new CartItem(undefined)
  }

  get listCartItemsLocalStorage(): CartItem[]
  {
    let cartItem: CartItem[] = JSON.parse( localStorage.getItem("cartItem") || "[]");
    if(cartItem == null)
    {
    return new Array<CartItem>();
    }
    return cartItem;
  }

  payCartItems(sale : any): Observable<any> {  
    var a =this.Url+'Sales';  
  return this.http.post<any>(this.Url,sale,{ headers: this.header});  
 }
 
 getIdUserAuthenticate(){
   return localStorage.getItem("ID");
 }
 
}
