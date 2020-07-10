import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages = [
    {
      title: "Home",
      url: "/posts",
      icon: "newspaper-outline"
    },
    {
      title: "Over Ons",
      icon: "information-circle-outline",
      children: [
        {
          title: "Team",
          url: "team",
          icon: "people-outline"
        },
        {
          title: "Missie",
          url: "mission",
          icon: "shield-checkmark-outline"
        }
      ]
    },
    {
      title: "Aanbod",
      url: "/workshops",
      icon: "create-outline"
    },
    {
      title: "Activiteiten",
      url: "/calendar",
      icon: "calendar-outline"
    },
    {
      title: "Media",
      icon: "globe-outline",
      children: [
        {
          title: "Foto's",
          url: "photos",
          icon: "images-outline"
        },
        {
          title: "Videos",
          url: "videos",
          icon: "videocam-outline"
        },
        {
          title: "Live Sessies",
          url: "livesessions",
          icon: "radio-outline"
        },
        {
          title: "Lesmateriaal",
          url: "course",
          icon: "document-attach-outline"
        }
      ]
    },
    {
      title: "FAQ",
      url: "/faq",
      icon: "help-outline"
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "mail-outline"
    }
  ];

  selectedPath = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
