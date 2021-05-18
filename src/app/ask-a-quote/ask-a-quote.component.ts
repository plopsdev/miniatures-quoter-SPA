import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../services/quote.service';
import { MiniaturesGroup } from '../services/rest.service';
@Component({
  selector: 'app-ask-a-quote',
  templateUrl: './ask-a-quote.component.html',
  styleUrls: ['./ask-a-quote.component.scss']
})
export class AskAQuoteComponent implements OnInit {

  miniaturesGroups: MiniaturesGroup[]=[]
 
  miniaturesGroupForm: MiniaturesGroup 

  constructor(private quoteService: QuoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.miniaturesGroupForm = {name: "", quantity: 0, wantBuilt: false, brand: "", comment: "", scale_id: 1, quality_id: 1}; //mise à 0 de l'objet qui sera complété par le form
  }

  addEntry(){
    this.miniaturesGroups.push(this.miniaturesGroupForm)
    this.miniaturesGroupForm = {name: "", quantity: 0, wantBuilt: false, brand: "", comment: "", scale_id: 1, quality_id: 1} //remise à 0 de l'objet pour le form
    console.log(this.miniaturesGroups)
  }

  onSubmit(){
    this.quoteService.quote.miniaturesGroups = this.miniaturesGroups
    this.quoteService.addQuote()
  }
}
