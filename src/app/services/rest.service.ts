import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = "http://127.0.0.1:8000/api/quotes";

export interface Quote {
  quote_id: number;
  user: User;
  name: string;
  createdAt: Date;
  colorScheme: string;
}

export interface User {
  user_id: number;
  name: string;
  mail: string;
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
}
