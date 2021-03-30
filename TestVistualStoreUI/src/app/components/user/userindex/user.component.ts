import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userList: User[] = [];

  constructor(private userservice: UserService,private router: Router) {
    
   }

  ngOnInit(): void {
    this.getUsers();
  }

  editUser(item:any){
    debugger;
    this.router.navigate(['/useredit/'+item.id]);
  }
  
  getUsers() {
    debugger;
    this.userservice.getUsers().subscribe(users => {    
      this.userList = users;
    })
  }
  deleteUser(id:number): void {
    this.userservice.deleteUser(id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/user']);
        },
        error => {
          console.log(error);
        });
        this.getUsers();
  }
 
  
}
