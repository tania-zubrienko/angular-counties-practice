import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Country, Region } from '../interfaces/country';
import { SearchCache } from '../interfaces/cache.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = 'https://restcountries.com/v3.1/'
  public searchCache : SearchCache = {
    capital: {search:'', countries: []},
    country: {search:'', countries: []},
    region: {region:'', countries: []}
  }

  constructor(private http: HttpClient) { this.loadFromStorage() }

  private searchResults(url:string) : Observable<Country[]>{
  return this.http.get<Country[]>(url).pipe(catchError(err => of([])))
  }
  private saveToStorage(){
    localStorage.setItem ('searchCache' , JSON.stringify(this.searchCache))
  }
  private loadFromStorage(){
    if(!localStorage.getItem('searchCache')) return
    this.searchCache = JSON.parse( localStorage.getItem('searchCache')! )
  }
  byCapital(search: string): Observable<Country[]> {
    const url = `${this.baseUrl}capital/${search}`
    return this.searchResults(url).pipe(
      tap( countries => this.searchCache.capital = {search, countries}),
      tap(()=>this.saveToStorage())
      )

  }

  byCountry(search: string): Observable<Country[]> {
    const url = `${this.baseUrl}name/${search}`
    return this.searchResults(url).pipe(
      tap( countries => this.searchCache.country = {search, countries}),
      tap(()=>this.saveToStorage())
      )

  }

  byRegion(region: Region): Observable<Country[]> {
    const url = `${this.baseUrl}region/${region}`
    return this.searchResults(url).pipe(
      tap( countries => this.searchCache.region = {region, countries}),
      tap(()=>this.saveToStorage()))
  }
}
