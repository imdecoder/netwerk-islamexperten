import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

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
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.wp.getPage(254).subscribe(res => {
      this.content = res['content']['rendered'];
    });
  }

  ngAfterViewInit() {
    $(document).on('click', 'div.flip-card', async function (event) {
      var img = $(this).find('img').attr('src');

      var modal = this.modalController.create('ModalPage');

      let modald: HTMLIonModalElement = await this.modalController.create({
        component: ModalPage
      });

      await modal.present();
    });
  }
}
