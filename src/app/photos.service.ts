import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  loading: boolean = false;
  pagination: { pagenumber: number; limit: number } = {
    pagenumber: 1,
    limit: 10,
  };
  photos: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

  constructor(private _http: HttpClient) {}

  getPhotos(): Observable<Array<any>> {
    this.loading = true;
    console.log('get called.');
    this._http
      .get<Array<any>>(
        `http://localhost:3000/photos?_page=${this.pagination.pagenumber}&_limit=${this.pagination.limit}`
      )
      .pipe(
        take(1),
        map((photos: Array<any>) => {
          this.loading = false;
          this.pagination.pagenumber++;
          const current = this.photos.getValue();
          this.photos.next(current.concat(photos));
          return photos;
        })
      )
      .subscribe();
    return this.photos.asObservable();
  }
}
