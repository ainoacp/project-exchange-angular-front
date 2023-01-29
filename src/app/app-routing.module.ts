import { HomeModule } from './pages/home/home.module';
import { ForeignexchangesComponent } from './pages/foreignexchanges/foreignexchanges.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'foreignExchanges', loadChildren: () => import('./pages/foreignexchanges/foreignexchanges.module').then(m => m.ForeignexchangesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
