import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  @Input()
  img: string;
  @Input()
  diaNumber: string;

  title: string;
  content: string;

  dia1 = {
    'title': 'Halal of niet?',
    'content': 'Alle vragen omtrent islam en onderwijs in Vlaanderen beantwoord. Heel veel scholen, leerkrachten, CLB-medewerkers, ouders, leerlingen… hebben vragen over hoe je in de praktijk best omgaat met allerlei vragen die een religie als islam oproept. Wat is voor moslims halal (toegestaan) en wat niet, en waarom? En hoever moet je gaan om daaraan tegemoet te komen op school? Deze workshop staat stil bij; Wat is de religieuze en culturele achtergrond van wat de islam soms vraagt en in hoeverre kan of moet je daaraan tegemoet komen? Wat met de vele vragen omtrent al dan niet gescheiden zwemmen, aangepaste leerinhoud (evolutieleer versus scheppingsverhaal, kooklessen, seksuele voorlichting, muziek,…), halal eten, bidden op school, deelname aan bos- en zeeklasse, de ramadan, het vak islam, medische consulten-vaccineren, ouderbetrokkenheid, islamitische feestdagen, hoofddoeken, conflicten op school,…? Wat zijn mogelijke tekenen van radicaliseren, hoe ga je daarmee om, hoe kan je radicaal gedachtengoed voorkomen?'
  };
  dia2 = {
    'title': 'Islam in Europa: bedreiging of verrijking?',
    'content': 'De welbekende en brandende actuele vraag in Europa: is de islam een gevaar of verrijking voor onze samenleving? Is er sprake van de zogenaamde ‘clash of civilizations’? Zijn de westerse en islamitische waarden verzoenbaar? Al deze vragen proberen we te beantwoorden in deze workshop.'
  };
  dia3 = {
    'title': 'Geschiedenis en evolutie van Islam',
    'content': 'De Islam is er al meer dan 1400 jaar en heeft ook zijn Gouden periode meegemaakt? Waar is die gebleven en wat heeft dit betekent voor Europa? Hoe is deze teloorgegaan? De namen Averroes, Al-Kindi, Avicenna en vele anderen stonden centraal voor die vooruitgangsperiode. Zijn er hedendaagse Arabische islamitische denkers die in hun voetsporen zijn getreden? Komt er ooit een islamitische ‘Renaissance’?'
  };
  dia4 = {
    'title': 'Hedendaagse islamitische stromingen',
    'content': 'Soennieten, Sjiieten, Alawieten, Salafisten en nog vele benamingen voor allerhande islamitische stromingen binnen de islam. Wie zijn ze? Wat is hun interpretatie van de Islam? En wat betekenen ze? Hoe zijn ze ontstaan? Waar streven ze naar? Dit en nog veel meer wordt behandeld tijdens dit seminar.'
  };

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    switch (this.diaNumber) {
      case '1': {
        this.initContent(this.dia1);
        break;
      }
      case '2': {
        this.initContent(this.dia2);
        break;
      }
      case '3': {
        this.initContent(this.dia3);
        break;
      }
      case '4': {
        this.initContent(this.dia4);
        break;
      }
    }
  }

  initContent(dia: any){
    this.title = dia.title;
    this.content = dia.content;
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
