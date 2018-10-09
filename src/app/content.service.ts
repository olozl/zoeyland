import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './content';
import { CTs } from './mock-cts';
import { PictureService } from './picture.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private pictureService: PictureService) { }

  getContents(): Observable<Content[]> {
    return of(CTs);
  }

  getContent(id: number): Observable<Content> {
    return of(CTs.find(content => content.id === id));
  }
}
