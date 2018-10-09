import { Component, OnInit } from '@angular/core';
import { CTs } from '../mock-cts';
import { Content } from '../content';
import { ContentService } from '../content.service';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //cts = CTs;
  selectedContent: Content;
  cts: Content[];
  pageSize = 9;
  

  constructor(private contentService: ContentService, private pictureService: PictureService) { }

  ngOnInit() {
    this.getContents();
  }

  onSelect(ct: Content): void {
    this.selectedContent = ct;
  }

  getContents(): void {
    this.contentService.getContents()
        .subscribe(cts => this.cts = cts);
  }
}
