import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  datos:any;
  order:any;

  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl)
    .subscribe(data => {
      this.datos = data;
      console.log(data);
    });
  }

  buy(e, item){
    console.log(item);
  }

}
