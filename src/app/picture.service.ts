import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  public id:number;
  public img:string;
  public date:string;
  public description: string;

  constructor() { 
    this.id=0;
    this.img='';
    this.date='';
    this.description='';
  }
}
