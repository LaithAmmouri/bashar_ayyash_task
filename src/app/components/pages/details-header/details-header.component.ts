import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss']
})
export class DetailsHeaderComponent implements OnInit {
  place: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.place);
  }
}
