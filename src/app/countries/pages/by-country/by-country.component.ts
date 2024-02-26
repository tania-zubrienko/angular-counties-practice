import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country-service.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent implements OnInit {

  public lastSearch? : string

  public isLoaded: boolean = false;
  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  searchCountry(search: string): void {
    console.log(search)
    this.isLoaded = true
    this.countryService.byCountry(search).subscribe(res => {
      this.countries = res
      this.isLoaded = false
    })
  }

  ngOnInit(): void {
    this.lastSearch = this.countryService.searchCache.country.search
    this.countries = this.countryService.searchCache.country.countries
  }
}
