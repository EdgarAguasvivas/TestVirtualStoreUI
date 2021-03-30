import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  formproduct:  FormGroup;
  user: Product = new Product();
  data: any;
  massage:string; 

  constructor(private fb:FormBuilder,private router:Router,private productservice: ProductService) { 
    this.formproduct = fb.group({
      product_name: ['',Validators.required],
      product_code: ['',Validators.required],
      price: [0,Validators.required],
      quantity: [0,Validators.required]             
    })
  }

  ngOnInit(): void {
  }

  create(){
    debugger;
    this.productservice.postProduct(this.formproduct.value).subscribe(    
      data =>    
      {           
        this.formproduct.reset(); 
        alert("Creado correctamente!");
      }); 
  }

}
