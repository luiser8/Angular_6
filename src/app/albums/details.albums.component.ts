import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './details.albums.component.html'
})
export class DetailsAlbumsComponent implements OnInit {
    datos:any;
    detail:any;
    id:string;

    private apiUrl = 'https://jsonplaceholder.typicode.com/albums/';

    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    buy(id){
        this.http.get(this.apiUrl+""+id)
        .subscribe(data => {
        this.detail = data;
        console.log(this.detail);
        });
    }

    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                this.buy(params['id']);
            })
    }
}