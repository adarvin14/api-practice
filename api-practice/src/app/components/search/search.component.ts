import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  quotes: any;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
  }

  term: string = '';

  setSearchStr(e: any) {
    this.term = e.target.value;
  }

  searchByTerm(){
    this.quoteService.getQuotesBySerchTerm(this.term).subscribe((response: any) => {
        this.quotes = response;
        console.log(response);
      }
    )
    
  }

}