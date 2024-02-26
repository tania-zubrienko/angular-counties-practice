import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country-service.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  @Input()
  currentCountry?: Country | null

  private isLoaded: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.byCountry(id))
      )
      .subscribe(country => this.currentCountry = country[0])
      this.isLoaded = true
  }
}
