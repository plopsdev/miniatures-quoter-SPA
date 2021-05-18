import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiniaturesGroup, QuoteFull, RestService, User } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  miniaturesGroups: MiniaturesGroup[] = []
  user: User = {name: "", mail: ""}
  quote: QuoteFull = {name: "", colorScheme: "", user: this.user, miniaturesGroups: this.miniaturesGroups, state_id: 1}
  

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  addQuote() {
    console.log(this.quote)
    this.rest.addQuote(this.quote).subscribe(
      (result) => {
        this.router.navigate(['/client/confirmation'])
      }
    )
  }

}
