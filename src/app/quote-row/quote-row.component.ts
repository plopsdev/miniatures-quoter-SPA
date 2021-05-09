import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quote, RestService } from '../services/rest.service';

@Component({
  selector: 'app-quote-row',
  templateUrl: './quote-row.component.html',
  styleUrls: ['./quote-row.component.scss']
})
export class QuoteRowComponent implements OnInit {

  @Input() quote: Quote;

  constructor(public rest:RestService) { }

  ngOnInit(): void {

  }

  updateQuote(new_state_id) {
    this.quote.state.id = new_state_id
    this.rest.updateQuote(this.quote)
    console.log(this.quote.state.id)
  }

}
