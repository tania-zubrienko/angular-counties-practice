import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ByCapitalComponent } from './components/by-capital/by-capital.component';
import { ByCountryComponent } from './components/by-country/by-country.component';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { ByRegionComponent } from './component/by-region/by-region.component';

const routes: Routes = [
  { path: 'by-capital', component: ByCapitalComponent },
  { path: 'by-country', component: ByCountryComponent },
  { path: 'by-region', component: ByRegionComponent },
  { path: ':id', component: CountryPageComponent }
]
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CountryRoutingModule { }
