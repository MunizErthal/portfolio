import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-green-goblin',
  imports: [],
  templateUrl: './green-goblin.html',
  styleUrls: ['./green-goblin.scss', './../projects.scss', './../projects-mobile.scss'],
})
export class GreenGoblin {

  language: string = 'en';  // en ou pt
  mobileMenu = false;

  constructor(private route: ActivatedRoute,
              private languageService: LanguageService) {
    this.loadParams();
    this.verifyMobile();
    this.subscribeToLanguageChanges();
  }

  loadParams() {
    this.route.queryParams.subscribe(params => {
      var language = params['language'];
      if (language)
        this.language = language;
    });
  }

  verifyMobile() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.mobileMenu = true;
    }
  }

  subscribeToLanguageChanges() {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }
}