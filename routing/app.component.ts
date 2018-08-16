import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app your Luis';
  posts = [];
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient){
    this.title = 'Titulo';
  }

  getPosts(): Observable<any>{
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
    
  }

ngOnInit(){
  this.getPosts().subscribe(result => {
    if(result.code == 200){
      console.log(result);
      this.posts.push(result.data);
    }
  }
)
}
}
