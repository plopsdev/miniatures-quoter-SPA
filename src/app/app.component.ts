import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'miniatures-quoter-SPA';

  isAdmin:boolean = false ;



  onSwitch() {
    if (this.isAdmin === true){
      this.isAdmin = false;
      this.router.navigate(['client'])
    } else {
      this.isAdmin = true
      this.router.navigate(['quotes-manager'])
    }
  }


  constructor(private router: Router) { }
}
