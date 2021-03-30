import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {

  formuser:  FormGroup;
  user: User = new User();
  data: any;
  massage:string; 
  
  constructor(private fb:FormBuilder,private router:Router,private userservice: UserService) { 
    this.formuser = fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      rol: [0,Validators.required]            
    })
  }

  ngOnInit(): void {
  }

  create(){
    debugger;
    this.userservice.postUser(this.formuser.value).subscribe(    
      data =>    
      {           
        this.formuser.reset(); 
        alert("Creado correctamente!");
      }); 
  }

}
