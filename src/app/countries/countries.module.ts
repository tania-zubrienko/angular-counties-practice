import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './components/by-capital/by-capital.component';
import { ByCountryComponent } from './components/by-country/by-country.component';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { CountryRoutingModule } from './country-routing.module';
import { ByRegionComponent } from './component/by-region/by-region.component';



@NgModule({
  declarations: [

    ByCapitalComponent,
    ByCountryComponent,
    CountryPageComponent,
    ByRegionComponent,

  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    CountryPageComponent
  ]
})
export class CountriesModule { }
