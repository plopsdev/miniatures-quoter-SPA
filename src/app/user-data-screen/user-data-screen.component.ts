import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../services/quote.service';
import { QuoteFull, User } from '../services/rest.service';

@Component({
  selector: 'app-user-data-screen',
  templateUrl: './user-data-screen.component.html',
  styleUrls: ['./user-data-screen.component.scss']
})
export class UserDataScreenComponent implements OnInit {

  constructor(private quoteService: QuoteService, private route: ActivatedRoute, private router: Router) { }

  quote= {name: "", colorScheme: ""}
  user= {name: "", mail: ""}

  ngOnInit(): void {
  }

  onSubmit() {
    this.quoteService.user.name = this.user.name
    this.quoteService.user.mail = this.user.mail

    this.quoteService.quote.name = this.quote.name
    this.quoteService.quote.colorScheme = this.quote.colorScheme

    this.router.navigate(['/ask-a-quote'])
  }

}
