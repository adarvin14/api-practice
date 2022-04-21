import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './components/quote/quote.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [{
    path: '',
    component: QuoteComponent
  },{
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
