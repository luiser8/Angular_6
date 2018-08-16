import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries:any;
  order:any;

  private apiUrl = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl)
    .subscribe(data => {
      this.countries = data;
      console.log(data);
    });
  }

}
