import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = "http://127.0.0.1:8000/api/quotes";

export interface Quote {
  id: number;
  name: string;
  createdAt: Date;
  state: State;
}

export interface State {
  id: number;
  name: string;
}

export interface User {
  name: string;
  mail: string;
}

export interface QuoteFull {
  name: string;
  colorScheme: string;
  user: User;
  miniaturesGroups: MiniaturesGroup[];
  state_id: number;
}

export interface MiniaturesGroup {
  name: string;
  quantity: number;
  wantBuilt: boolean;
  brand: string;
  comment: string;
  scale_id: number;
  quality_id: number
}

export interface MiniaturesGroupsDetails {
  id: number;
  scale: {
    id: number;
    name: string;
    paintPrice: number;
    buildPrice: number;
  },
  quality: {
    id: number;
    name: string;
    priceMultiplier: number;
  },
  quantity: number;
  wantBuilt: boolean;
  brand: string;
  comment: string;
  name: string;
}

export interface QuoteDetails {
  id: number;
  user: {
    id: number;
    name: string;
    mail: string;
  },
  name: string;
  createdAt: Date;
  colorScheme: string;
  miniaturesGroups: MiniaturesGroupsDetails[],
  state: {
    id: number;
    name: string;
  }
}


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  //Observable permet d'avoir une gestion asynchrone de la requête
  getQuotes(): Observable<any> { 
    return this.http.get<Quote>(endpoint)
  }

  getQuoteDetails(id): Observable<QuoteDetails> {
    return this.http.get<QuoteDetails>(endpoint + '/' + id)
  }

  updateQuote(quote): Observable<Quote>{
    return this.http.put<Quote>(endpoint +'/'+ quote.id, {new_state_id: quote.state.id})
  }

  addQuote(quote: QuoteFull): Observable<any>{
    return this.http.post(endpoint, quote)
  }

  deleteQuote(id): Observable<any> {
    return this.http.delete<Quote>(endpoint + '/' + id)
  }
}
