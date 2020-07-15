import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { DomSanitizer } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.page.html',
  styleUrls: ['./workshops.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkshopsPage implements OnInit {
  content: any;

  constructor(
    private wp: WordpressService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.wp.getPage(254).subscribe(res => {
      this.content = this.sanitizer.bypassSecurityTrustHtml(res['content']['rendered']);
    });
  }

  ionViewDidLoad(){
    console.log("loaddddd");
  }

}
