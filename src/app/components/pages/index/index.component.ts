import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { Destination } from '../../../Destination';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  title = 'luckytrip';
  destinations: Destination[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService
    .getDestinations()
    .subscribe(
      (response) => {
        this.destinations = response.destinations;
      });
  }

  searchDestination(destination: any) {
    this.searchService
      .getDestinations(destination)
      .subscribe(
        (response) => {
          this.destinations = response.destinations;
        });
  }

}
