import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent implements OnInit{

  public lastSearch : string = ''

  public isLoaded: boolean = false;
  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  searchByCapital(capital: string): void {
    this.isLoaded=true
    this.countryService.byCapital(capital)
    .subscribe(countries => {
      this.countries = countries
      this.isLoaded = false;
    })

  }

  ngOnInit(): void {
      this.lastSearch = this.countryService.searchCache.capital.search
      this.countries = this.countryService.searchCache.capital.countries
  }

}
