import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { CountryService } from '../../../countries/services/country-service.service';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>()
  private dbSubscriptor? : Subscription


  @Input()
  placeholder: string = ''

  @Input()
  searchValue : string =''

  @Output()
  onValue = new EventEmitter<string>()

  @Output()
  onDebounce = new EventEmitter<string>()

  onEnter(search: string): void {
    this.onValue.emit(search)
  }

  onKeyPressed(search: string) {
    this.debouncer.next(search)
  }

  ngOnInit(){
    this.dbSubscriptor = this.debouncer.pipe(debounceTime(1000)).subscribe(search=>this.onDebounce.emit(search))
  }
  ngOnDestroy(): void {
      this.dbSubscriptor?.unsubscribe
  }

}

