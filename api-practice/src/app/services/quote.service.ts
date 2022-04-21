import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../models/quote';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getQuotes() {
    let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/";
    return this.http.get(url);
  }

  getQuotesBySerchTerm(term: string): Observable<any>{
    return this.http.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/'+term)
      .pipe(
        map(response => response as Quote)
      )
  }

}
