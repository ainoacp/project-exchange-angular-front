import { Value, Currencies, Currency } from './../models/currencies.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  
  URL = 'https://api.vatcomply.com/rates?base=EUR';
  values: Value = { value:1};
  currencies: Currencies[] = [];
  currency: Currency = {
    date: '',
    base: 'x',
    amount: 1,
    isos: ([] = []),
  };
  iso:string = 'EUR';
  amount:number = 1;
  x:any;

  constructor(private http: HttpClient) { }

  //traer los datos de la api con un tipo de ISO(ESP)
  getCurrency() {
    return this.currency;
    console.log(this.currency);
  }

  setCurrency(x:any) {
    console.log(x);
    this.currency = {
      date: x.date,
      base: x.base,
      amount: this.values.value,
      isos: [],
    };
    //para conseguir que se haga el cambio de divisas
    for (const key in x.rates) {
      this.currency.isos.push({
        iso: key,
        rate: x.rates[key],
        exchange: x.rates[key] * this.currency.amount,
      });
    }
  }

  //traer divisas
  getForeignExchanges(URL:string) {
    this.setCurrency(this.http.get(URL));
    return this.http.get(URL);
  }

  setAmount(value:number) {
    this.values.value = value;
    this.currency.amount = value;
    
    this.currency.isos.forEach((element) => {
      element.exchange = element.rate * value;
    });
  }

  getAmount() {
    return this.values.value;
  }
}
