import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-livesessions',
  templateUrl: './livesessions.page.html',
  styleUrls: ['./livesessions.page.scss'],
})
export class LivesessionsPage implements OnInit {
  content: any;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.wp.getPage(293).subscribe(res => {
      this.content = res;
    });
  }

}
