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

  constructor(public rest:RestService, private router: Router) { }

  ngOnInit(): void {

  }

  updateQuote(new_state_id) {
    this.quote.state.id = new_state_id
    this.rest.updateQuote(this.quote).subscribe(
      (response) => {
        console.log("updated")
      }
    )
    console.log(this.quote.state.id)
  }

  deleteQuote() {
    //a améliorer pour retirer directemnt de la liste quand on a supprimé
  
    this.rest.deleteQuote(this.quote.id).subscribe(
      (response) => {
        console.log("removed")
      }
    )
  }

  getQuoteDetails() {
    this.router.navigate(['/quotes-manager', this.quote.id ])
  }
}