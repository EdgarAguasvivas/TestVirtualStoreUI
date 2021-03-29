import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from 'src/app/models/registration';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formregistration:  FormGroup;
  registration: Registration = new Registration();
  data: any;
  massage:string; 

  constructor(private fb:FormBuilder,private router:Router,private loginservice: LoginserviceService) {
    this.formregistration = fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      rol: [2]            
    })
   }

  ngOnInit(): void {
  }

  register(){
    const register = this.formregistration.value;  
    this.loginservice.CreateUser(register).subscribe(    
      ()=>    
      {    
        this.data = true;           
        this.formregistration.reset();   
        this.router.navigate(['/Login']);
        alert(this.data.text);
      }); 
  }

}
