import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productindex',
  templateUrl: './productindex.component.html',
  styleUrls: ['./productindex.component.css']
})
export class ProductindexComponent implements OnInit {
  
  productList: Product[] = [];

  constructor(private productservice: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  editUser(item:any){
    debugger;
    this.router.navigate(['/productedit/'+item.id]);
  }
  
  getProducts() {
    debugger;
    this.productservice.getProducts().subscribe(products => {    
      this.productList = products;
    })
  }
  deleteProduct(id:number): void {
    this.productservice.deleteProduct(id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/productindex']);
        },
        error => {
          console.log(error);
        });
        this.getProducts();
  }

}
