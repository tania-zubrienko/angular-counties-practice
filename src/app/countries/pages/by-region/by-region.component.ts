import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country-service.service';
import { Country, Region } from '../../interfaces/country';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent implements OnInit{

  public regions:Region[] = ["Americas", "Europe", "Oceania", "Asia", "Africa"]

  public selectedRegion? : Region
  public isLoaded: boolean = false;
  public lastSearch : Region = ''
  public countries: Country[] = []

  constructor(private countryService: CountryService) { }

  searchRegion(search: Region): void {

    this.isLoaded = true
    this.selectedRegion = search

    this.countryService.byRegion(search).subscribe(res => {
      this.countries = res
      this.isLoaded = false
    })

  }

  ngOnInit(): void {
      this.lastSearch = this.countryService.searchCache.region.region
      this.countries = this.countryService.searchCache.region.countries
  }
}
