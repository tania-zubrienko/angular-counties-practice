import { Country, Region } from "./country"

export interface SearchCache {
  capital : TermSearch,
  country : TermSearch,
  region : RegionSearch
}

export interface TermSearch{
  search: string,
  countries: Country[]
}

export interface RegionSearch{
  region: Region,
  countries: Country[]
}
