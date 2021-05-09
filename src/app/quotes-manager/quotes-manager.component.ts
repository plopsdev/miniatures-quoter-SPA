import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService, State, Quote } from '../services/rest.service';


@Component({
  selector: 'app-quotes-manager',
  templateUrl: './quotes-manager.component.html',
  styleUrls: ['./quotes-manager.component.scss']
})
export class QuotesManagerComponent implements OnInit {

  quotes: Quote[] = []
  quotesByState: Quote[] = []

  constructor( public rest:RestService ) { }

  ngOnInit(): void {
    this.getQuotes()
    
  }

  getQuotes(){
    this.rest.getQuotes().subscribe(
      (response) => {
        
        this.quotes = response
        this.getQuotesByState(1)
      }
    )
  }

  getQuotesByState(state_id){
    this.quotesByState = []
    for (let quote of this.quotes ){
      // console.log(quote.state.id)
      if (quote.state.id == state_id){
        this.quotesByState.push(quote)
      }
    }
  }

}
