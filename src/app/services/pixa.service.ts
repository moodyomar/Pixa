import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {sortBy} from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class PixaService {
  searchQ:any;
images_ar:any[] = [];
imagesInfo:any = {};
  constructor(private apiSer:ApiService) { }

getImages():any{
  return this.images_ar;
}

doApiList(_url:any):void{
  this.images_ar.splice(0,this.images_ar.length)
  this.apiSer.doApiGet(_url).subscribe((data:any) => {
    this.images_ar.push(...data.hits);
  })
}

doApiImgs(_url: any, _sortQ: string): void {
  this.images_ar.splice(0, this.images_ar.length);
  this.apiSer.doApiGet(_url)
    .subscribe(
      (data: any) => {
        this.images_ar.push(...data.hits);
        let temp_ar = sortBy(this.images_ar, _sortQ);
        this.images_ar.splice(0, this.images_ar.length);
        this.images_ar.push(...temp_ar);
        this.images_ar.reverse()
        console.table(this.images_ar)
      },
      (err: any) => {
        console.log(err);
      })
}

doApiSearch(_searchQ:string){
  let apiKey = '17357236-aeda27ac71ed0d74e165db2a8'
  let url = `https://pixabay.com/api/?key=${apiKey}&q=${_searchQ}`
  this.doApiList(url)
}

sortImage(_sortInput:any){
let temp_ar = sortBy(this.images_ar,_sortInput)
this.images_ar.splice(0,this.images_ar.length,...temp_ar)
this.images_ar.reverse()
}

getImgInfoSingle():any {
  return this.imagesInfo;
}

doApiSingleInfo(_url:any):void{
  this.apiSer.doApiGet(_url).subscribe((data:any) => {
    for(let key in data.hits[0]){
      this.imagesInfo[key] = data.hits[0][key];
    }
    console.log(this.imagesInfo)

  })
}



}

