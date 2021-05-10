import { Component, OnInit } from '@angular/core';
import { PixaService } from '../../services/pixa.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
sortSelect = 'likes'
  constructor(private pixaSer:PixaService) { }

  ngOnInit(): void {
  }

  onSortChange(){
    let apiKey = '17357236-aeda27ac71ed0d74e165db2a8'
    let url = `https://pixabay.com/api/?key=${apiKey}&q=${this.pixaSer.searchQ}`
    this.pixaSer.doApiImgs(url,this.sortSelect)  
  }
}
