import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService, User, Quote } from '../services/rest.service';

@Component({
  selector: 'app-quotes-manager',
  templateUrl: './quotes-manager.component.html',
  styleUrls: ['./quotes-manager.component.scss']
})
export class QuotesManagerComponent implements OnInit {

  quotes: Quote[] = []

  constructor( public rest:RestService ) { }

  ngOnInit(): void {
    this.getQuotes()
  }

  getQuotes(){
    this.rest.getQuotes().subscribe(
      (response) => {
        
        this.quotes = response
        console.log(this.quotes)
      }
    )
  }

}
