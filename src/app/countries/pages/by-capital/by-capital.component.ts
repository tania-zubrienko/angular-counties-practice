import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {

  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  searchByCapital(capital: string): void {

    this.countryService.byCapital(capital).subscribe(countries => this.countries = countries)

  }

}
