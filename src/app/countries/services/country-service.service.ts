import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = 'https://restcountries.com/v3.1/'

  constructor(private http: HttpClient) { }

  byCapital(capital: string): Observable<Country[]> {

    const url = `${this.baseUrl}capital/${capital}`
    return this.http.get<Country[]>(url).pipe(catchError(err => of([])))

  }

  byCountry(country: string): Observable<Country[]> {

    const url = `${this.baseUrl}/name/${country}`
    return this.http.get<Country[]>(url).pipe(catchError(err => of([])))

  }

  byRegion(region: string): Observable<Country[]> {

    const url = `${this.baseUrl}region/${region}`
    return this.http.get<Country[]>(url).pipe(catchError(err => of([])))
  }
}
