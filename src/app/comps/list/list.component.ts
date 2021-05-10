import { Component, OnInit } from '@angular/core';
import { PixaService } from '../../services/pixa.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  imagesAr:any[] = []
  constructor(private pixaSer:PixaService) { }

  ngOnInit(): void {
    this.imagesAr = this.pixaSer.getImages();
    let apiKey = '17357236-aeda27ac71ed0d74e165db2a8'
    let url = `https://pixabay.com/api/?key=${apiKey}&q=asia`
    this.pixaSer.doApiList(url)
    console.log(this.imagesAr)
  }

}

