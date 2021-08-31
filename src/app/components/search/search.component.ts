import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  place: string = '';

  @Output() onSearchDestination: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onSearchDestination.emit(this.place);
  }
}
