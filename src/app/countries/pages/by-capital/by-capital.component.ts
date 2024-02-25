import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {

  searchByCapital(capital: string) {
    console.log(capital)
  }

}
