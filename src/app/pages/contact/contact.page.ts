import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  content: any

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.wp.getPage(127).subscribe(res => {
      this.content = null;
    });
  }

}
