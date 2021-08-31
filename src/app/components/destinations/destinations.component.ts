import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../services/search.service';

import { Destination } from '../../Destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  @Input() destinations: any;
  p: number = 1;
  total: number = 0;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.total = this.destinations.length;
  }

}
