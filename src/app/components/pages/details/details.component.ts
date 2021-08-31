import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../services/search.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details: any;
  bgImage: any;
  country: string = '';
  city: string = '';
  descText: string = '';

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {
    let destinationId = this.activatedRoute.snapshot.params.id;

    this.searchService.getDetails(destinationId).subscribe((response) => {
      this.details = response.destination;
      this.bgImage = response.destination.thumbnail.image_url;
      this.city = response.destination.city;
      this.country = response.destination.country_name;
      this.descText = response.destination.description.text;
    });
  }

  BackgroundImageStyle(){

    return {
      'background-image': 'url(' + this.bgImage + ')'
    }
  }

}
