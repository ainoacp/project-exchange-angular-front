import { CurrenciesService } from './../../../shared/services/currencies.service';
import { Currency, Value } from './../../../shared/models/currencies.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit{
  
  myCurrency: Currency = this.currenciesService.currency;
  x:any;
  amount?: Value;

  constructor(private currenciesService: CurrenciesService) {}
  
  ngOnInit() {
    this.amount = this.currenciesService.values;
    this.currenciesService.getForeignExchanges('https://api.vatcomply.com/rates?base=EUR').subscribe((res:any) => {
      this.x = res;
      this.currenciesService.setCurrency(this.x);
      this.myCurrency = this.currenciesService.getCurrency();
    });
  }

  changeISO(newISO:string) {
    this.currenciesService.getForeignExchanges('https://api.vatcomply.com/rates?base=' + newISO).subscribe((res:any) => {
      this.x = res;
      this.currenciesService.setCurrency(this.x);
      this.myCurrency = this.currenciesService.getCurrency();
    });
  }

}
