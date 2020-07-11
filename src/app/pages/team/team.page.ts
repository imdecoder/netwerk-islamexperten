import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamPage implements OnInit {
  content: any;

  constructor(
      private wp: WordpressService,
      private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.wp.getPage(180).subscribe(res => {
      this.content = this.sanitizer.bypassSecurityTrustHtml(res['content']['rendered']);
    });
  }

}
