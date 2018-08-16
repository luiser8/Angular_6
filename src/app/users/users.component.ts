import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  jugadores:any;
  order:any;

  private apiUrl = 'https://api-mi-liga.now.sh/api/jugadores';
  private apiUrl2 = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl)
    .subscribe(data => {
      this.jugadores = data;
      console.log(data);
    });
  }

}
