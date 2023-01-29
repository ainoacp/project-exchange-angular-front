import { CurrenciesService } from './../../shared/services/currencies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreignexchanges',
  templateUrl: './foreignexchanges.component.html',
  styleUrls: ['./foreignexchanges.component.scss']
})
export class ForeignexchangesComponent implements OnInit{

  amount:number = 1;

  constructor(private currenciesService: CurrenciesService) {}

  ngOnInit() {
    this.currenciesService.setAmount(1);
  }

  exchange() {
    this.currenciesService.setAmount(this.amount);
  }
  
}
