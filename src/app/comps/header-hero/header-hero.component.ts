import { Component, OnInit } from '@angular/core';
import { PixaService } from '../../services/pixa.service';

@Component({
  selector: 'app-header-hero',
  templateUrl: './header-hero.component.html',
  styleUrls: ['./header-hero.component.css']
})
export class HeaderHeroComponent implements OnInit {
  searchQ:any = ''
  constructor(private pixaSer:PixaService) { }

  ngOnInit(): void {
  }

  doApiSearch(){
    this.pixaSer.doApiSearch(this.searchQ)
    this.pixaSer.searchQ =  this.searchQ;
  }
}
