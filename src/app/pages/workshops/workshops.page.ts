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
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.wp.getPage(254).subscribe(res => {
      this.content = res['content']['rendered'];
    });
  }

  async presentModal(event: any) {
    var imgSrc = event.srcElement.src;
    var startIndex = imgSrc.indexOf("Dia");
    var stopIndex = imgSrc.indexOf(".jpg");
    var diaNumber = imgSrc.substring(startIndex + 3, stopIndex);
    
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'img': imgSrc,
        'diaNumber': diaNumber
      }
    });

    return await modal.present();
  }
}
