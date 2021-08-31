import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Destination } from '../Destination';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getDestinations(place: any = ''){
    let destinationsUrl: string = 'https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations?search_type=city_or_country&search_value=';

    return this.http.get<any>(destinationsUrl + place);
  }

  getDetails(id: any){
    let detailsUrl: string = 'https://devapi.luckytrip.co.uk/api/2.0/top_five/destination?id=';
    return this.http.get<any>(detailsUrl + id);
  }
}
