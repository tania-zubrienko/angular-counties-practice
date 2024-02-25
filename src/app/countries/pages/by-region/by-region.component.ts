import { Component } from '@angular/core';
import { CountryService } from '../../services/country-service.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent {

  countries: Country[] = []
  constructor(private countryService: CountryService) { }

  searchRegion(search: string): void {
    this.countryService.byRegion(search).subscribe(res => this.countries = res)
  }
}
