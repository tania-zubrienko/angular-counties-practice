import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryRoutingModule } from './country-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';



@NgModule({
  declarations: [
    CountryPageComponent,
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule,
  ],
  exports: []
})
export class CountriesModule { }
