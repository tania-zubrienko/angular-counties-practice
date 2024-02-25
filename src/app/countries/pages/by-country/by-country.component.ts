import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country-service.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: ``
})
export class ByCountryComponent {

  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  searchCountry(search: string): void {

    this.countryService.byCountry(search).subscribe(res => this.countries = res)
  }
}
