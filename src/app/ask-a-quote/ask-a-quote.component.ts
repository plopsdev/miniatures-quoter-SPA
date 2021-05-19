import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../services/quote.service';
import { MiniaturesGroup, Quality, RestService, Scale } from '../services/rest.service';
@Component({
  selector: 'app-ask-a-quote',
  templateUrl: './ask-a-quote.component.html',
  styleUrls: ['./ask-a-quote.component.scss']
})
export class AskAQuoteComponent implements OnInit {

  miniaturesGroups: MiniaturesGroup[]=[]
 
  miniaturesGroupForm: MiniaturesGroup 

  qualities:Quality[]
  scales:Scale[]

  prices: any[] = []
  constructor(private quoteService: QuoteService, private route: ActivatedRoute, private router: Router, public rest: RestService) { }

  ngOnInit(): void {
    
    this.miniaturesGroupForm = {name: "", quantity: 0, wantBuilt: false, brand: "", comment: "", scale_id: 1, quality_id: 1}; //mise à 0 de l'objet qui sera complété par le form
    this.rest.getQualities().subscribe(
      (response) => {
        this.qualities = response
      }
    );
    this.rest.getScales().subscribe(
      (response) => {
        this.scales = response
      }
    );
  }

  addEntry(){
    this.getRowPrice(this.miniaturesGroupForm)
    this.miniaturesGroups.push(this.miniaturesGroupForm)
    this.miniaturesGroupForm = {name: "", quantity: 0, wantBuilt: false, brand: "", comment: "", scale_id: 1, quality_id: 1} //remise à 0 de l'objet pour le form
  }

  onSubmit(){
    this.quoteService.quote.miniaturesGroups = this.miniaturesGroups
    this.quoteService.addQuote()
  }
  
  getRowPrice({scale_id, quality_id, wantBuilt, quantity}) {
    let price = 0;
    let scale = this.scales.find(scale => scale.id === scale_id)
    let quality = this.qualities.find(quality => quality.id === quality_id)

    if (wantBuilt) {
      price += scale.buildPrice
    }

    price += scale.paintPrice;
    price *= quality.priceMultiplier;
    price *= quantity;

    this.prices.push(price)
  }

  getScale(scale_id){
    let scale = this.scales.find(scale => scale.id === scale_id);
    return scale.name;
  }

  getQuality(quality_id){
    let quality = this.qualities.find(quality => quality.id === quality_id);
    return quality.name;
  }
}
