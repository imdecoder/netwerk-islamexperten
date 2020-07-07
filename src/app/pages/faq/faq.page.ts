import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  content: any;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.wp.getPage(127).subscribe(res => {
      this.content = res;
    });
  }

}
