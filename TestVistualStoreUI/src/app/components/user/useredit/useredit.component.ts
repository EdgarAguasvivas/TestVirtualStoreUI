import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  user: User = new User();
  formuser:  FormGroup;
  userId: number = 0;
  
  constructor(private fb:FormBuilder,private userservice: UserService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.formuser = this.fb.group({
      ID: 0,
      username: ['', Validators.required],
      password: ['', Validators.required],
      rol: [0, Validators.required]
    });

    this.route.params.subscribe(params => {
      debugger;
      this.userId = params['id'];

      this.userservice.getUser(this.userId).subscribe(
        user => this.loadForm(user)  
    );
    
  });
}
  loadForm(user: any) {
    debugger;
    this.formuser.patchValue({
      ID: user.id,
      password: user.password,
      username: user.user_Name,
      rol: user.rol
    });
  }

  get formControl() {
    return this.formuser.controls;
  }

  editUser() {
    this.userservice.putUser(this.userId,this.formuser.value)
      .subscribe(
        response => {
          console.log(response);
          alert('El usuario fue actualizado!');
        },
        error => {
          alert(error);
          console.log(error);
        });
  }
  
}
