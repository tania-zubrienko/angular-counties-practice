import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent {
  searchRegion(search: string): void {
    console.log("desde Region", search)
  }
}
