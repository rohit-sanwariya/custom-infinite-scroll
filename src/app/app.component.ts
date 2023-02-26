import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pagination:{pagenumber:number,limit:number}={
    pagenumber:1,limit:10,
  }
  photos$ : Observable<Array<any>> = this._http.get<Array<any>>(`http://localhost:3000/photos?_page=${this.pagination.pagenumber}&_limit=${this.pagination.limit}`)
  constructor(
    private _http:HttpClient
  ){}

  onScroll(){
    console.log('end')
  }
}
