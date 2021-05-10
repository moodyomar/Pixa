import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  PixaService
} from '../../services/pixa.service';

@Component({
  selector: 'app-signle-page',
  templateUrl: './signle-page.component.html',
  styleUrls: ['./signle-page.component.css']
})
export class SignlePageComponent implements OnInit {
  imagesObjInfo: any = {}
  constructor(private pixaSer: PixaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.imagesObjInfo = this.pixaSer.getImgInfoSingle();
    let imgId = this.route.snapshot.paramMap.get("id");
    console.log(imgId)
    let apiKey = '17357236-aeda27ac71ed0d74e165db2a8'
    let url = `https://pixabay.com/api/?key=${apiKey}&id=${imgId}`
    this.pixaSer.doApiSingleInfo(url);
  }
}
