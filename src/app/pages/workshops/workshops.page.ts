import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.page.html',
  styleUrls: ['./workshops.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkshopsPage implements OnInit {
  content: any;

  constructor(
    private wp: WordpressService
  ) { }

  ngOnInit() {
    this.wp.getPage(254).subscribe(res => {
      this.content = res['content']['rendered'];
    });
  }

  ngAfterViewInit() {
    const modalElement = document.createElement('ion-modal');
    modalElement.component = 'modal-page';
    modalElement.cssClass = 'my-modal-class';
    modalElement.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal Header</ion-title>
          <ion-buttons slot="primary">
            <ion-button (click)="dismissModal()">
              <ion-icon slot="icon-only" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        Modal Content
      </ion-content>`;

    $(document).on('click', 'div.flip-card', async function (event) {
      var img = $(this).find('img').attr('src');

      modalElement.componentProps = {
        'firstname': 'Emin Arif',
        'lastname': 'Pirinç',
        'img': img
      };

      console.log(modalElement.componentProps);
    
      document.body.appendChild(modalElement);
      return modalElement.present();
    });

    async function dismissModal() {
      await modalElement.dismiss();
    }
  }
}
