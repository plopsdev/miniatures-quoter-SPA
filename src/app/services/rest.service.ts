import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = "http://127.0.0.1:8000/api/quotes/";

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


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  //Observable permet d'avoir une gestion asynchrone de la requête
  getQuotes(): Observable<any> { 
    return this.http.get<Quote>(endpoint)
  }

  updateQuote(quote): Observable<any>{
    console.log(endpoint + quote.id)
    return this.http.put<Quote>(endpoint + quote.id, quote)
  }

  addQuote(quote: QuoteFull): Observable<any>{
    return this.http.post(endpoint, quote)
  }
}
