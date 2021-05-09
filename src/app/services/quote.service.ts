import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiniaturesGroup, QuoteFull, RestService, User } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  miniaturesGroups: MiniaturesGroup[]
  user: User = {name: "", mail: ""}
  quote: QuoteFull = {name: "", colorScheme: "", user: this.user, miniaturesGroups: []}
  

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  addQuote() {
    this.rest.addQuote(this.quote).subscribe(
      (result) => {
        this.router.navigate(['/confirmation'])
      }
    )
  }

}
