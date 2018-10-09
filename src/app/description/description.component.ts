import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../content';
import { PictureService } from '../picture.service';
import { ContentService } from '../content.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  content: Content;
  id: number;
  img: string;
  date: string;
  description: string;

  constructor(
    private service: PictureService,
    private cService: ContentService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.id = this.stringToNum(this.route.snapshot.paramMap.get('id'));
    this.cService.getContent(this.id).subscribe(content => this.content = content);
    this.date = this.content.date;
    this.img = this.content.img;
    this.description = this.content.description;
  }

  stringToNum(str: any): number {
    return str * 1;
  }
}
