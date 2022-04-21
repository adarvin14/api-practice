import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
  }

}
