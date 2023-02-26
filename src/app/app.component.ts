import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, BehaviorSubject, map, take } from 'rxjs';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  photos$: Observable<Array<any>> =  this._service.getPhotos();

  constructor(private _http: HttpClient, public _service: PhotosService) {}

  reachedEnd(event: boolean): void {
    if (this._service.loading)return;
    this.photos$ = this._service.getPhotos();
  }
}
