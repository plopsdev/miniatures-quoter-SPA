import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService, State, Quote } from '../services/rest.service';


@Component({
  selector: 'app-quotes-manager',
  templateUrl: './quotes-manager.component.html',
  styleUrls: ['./quotes-manager.component.scss']
})
export class QuotesManagerComponent implements OnInit {

  quotes: Quote[] = [];
  quotesByState: Quote[] = [];
  currentState: number;

  constructor( public rest:RestService ) { }

  ngOnInit(): void {
    this.getQuotes()
    this.setCurrentState(1)
  }

  getQuotes(){
    this.rest.getQuotes().subscribe(
      (response) => {
        this.quotes = response
        // this.getQuotesByState(1)
      }
    )
  }

  getQuotesByState(state_id){
    this.quotesByState = []
    for (let quote of this.quotes ){
      // console.log(quote)
      if (quote.state.id == state_id){
        this.quotesByState.push(quote)
      }
    }
  }

  setCurrentState(state_id){
    this.currentState=state_id;
    console.log(this.currentState)
  }

  deleteQuote(id){
    this.quotes.filter(quote => quote.id !== id)
  }

}
