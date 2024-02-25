import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: ``
})
export class ByCountryComponent {
  searchCountry(search: string): void {
    console.log("Desde country:", search)
  }
}
