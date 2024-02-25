import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input()
  countries: Country[] = []

  @Output()
  clickValue = new EventEmitter<string>()

  onClick(country: string) {
    this.clickValue.emit(country)
  }
}
