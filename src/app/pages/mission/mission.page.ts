import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
  content: any;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.wp.getPage(259).subscribe(res => {
      this.content = res;
    });
  }

}
