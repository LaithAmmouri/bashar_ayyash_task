import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Destination } from '../../Destination';

@Component({
  selector: 'app-destination-item',
  templateUrl: './destination-item.component.html',
  styleUrls: ['./destination-item.component.scss']
})
export class DestinationItemComponent implements OnInit {
  @Input() destination: any;

  constructor() { }

  ngOnInit(): void {
  }

}
