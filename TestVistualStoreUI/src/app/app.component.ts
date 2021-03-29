import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAuthenticate: boolean;

  title = 'TestVistualStoreUI'; 
  /**
   *
   */
  constructor() {
   
    this.isAuthenticate = localStorage.getItem("isAuthenticate") == 'true' ? true : false;    
  }
  
}
