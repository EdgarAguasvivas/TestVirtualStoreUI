import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Login } from 'src/app/models/login';
import { LoginserviceService } from 'src/app/services/loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  loginmodel: Login = new Login();
  appcomp: AppComponent = new AppComponent();
  data: any;
  massage:string;      

  constructor(private fb:FormBuilder,private router:Router,private loginservice: LoginserviceService) { 
    this.formLogin = fb.group({
      user_name: ['',Validators.required],
      password: ['',Validators.required]      
    })
  }

  ngOnInit(): void {
    localStorage.removeItem('UserName');  
    localStorage.removeItem('ID');  
    localStorage.setItem("isAuthenticate","false");       
  }

  login() {
    
    const login = this.formLogin.value;  
    this.loginservice.Login(login).subscribe(    
      data =>    
      {      
        this.formLogin.reset();
        localStorage.setItem("UserName",data.user_Name); 
        localStorage.setItem("ID",data.id); 
        localStorage.setItem("isAuthenticate","true");     
        this.router.navigate(['/dashboard']);
       
      }); 
       
  };    


}
