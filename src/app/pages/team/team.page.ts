import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamPage implements OnInit {
  content: any;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.wp.getPage(180).subscribe(res => {
      this.content = res['content']['rendered'];
      console.log(this.content);
    });
  }

}
