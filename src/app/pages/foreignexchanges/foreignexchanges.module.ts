import { HttpClientModule } from '@angular/common/http';
import { ForeignexchangesRoutingModule } from './foreignexchanges-routing.module';
import { ForeignexchangesComponent } from './foreignexchanges.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './converter/converter.component';



@NgModule({
  declarations: [
    ForeignexchangesComponent,
    ConverterComponent,
  ],
  imports: [
    CommonModule,
    ForeignexchangesRoutingModule,
    FormsModule, 
    HttpClientModule
  ]
})
export class ForeignexchangesModule { }
