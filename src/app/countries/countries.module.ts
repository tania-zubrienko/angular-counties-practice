import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryRoutingModule } from './country-routing.module';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    CountryPageComponent,
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule,
  ],
  exports: []
})
export class CountriesModule { }
