import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  content: any;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.wp.getPage(237).subscribe(res => {
      this.content = res;
    });
  }

}
