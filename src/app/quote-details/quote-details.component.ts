import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteDetails, QuoteFull, RestService } from '../services/rest.service';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, public rest: RestService, private router: Router) { }

  quote: QuoteDetails

  ngOnInit(): void {
    this.rest.getQuoteDetails(this.route.snapshot.params['id']).subscribe(
      (response) => {
        this.quote = response
      }
    )
    }  
  getRowPrice(id) {
    let price = 0;
    let row = this.quote.miniaturesGroups.find(miniaturesGroup => miniaturesGroup.id === id)

    if (row.wantBuilt){
      price = row.scale.buildPrice;
    }

    price += row.scale.paintPrice;
    price *= row.quality.priceMultiplier;
    price *= row.quantity; 

    return price
  }

  updateQuote(new_state_id) {
    this.quote.state.id = new_state_id
    this.rest.updateQuote(this.quote).subscribe(
      (response) => {
        console.log("updated")
      }
    )
    this.router.navigate(['quotes-manager'])
  }

  deleteQuote() {
    //a améliorer pour retirer directemnt de la liste quand on a supprimé
  
    this.rest.deleteQuote(this.quote.id).subscribe(
      (response) => {
        console.log("removed")
      }
    )
    this.router.navigate(['quotes-manager'])
  }
  
}
