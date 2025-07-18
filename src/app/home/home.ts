import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  language: string = 'en';  // en ou pt
  mobileMenu = false;

  constructor(private route: ActivatedRoute,
              private languageService: LanguageService) {
    this.subscribeToLanguageChanges();
    this.verificarMobile();
    this.loadLanguage();
  }

  subscribeToLanguageChanges() {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  loadLanguage() {
    this.route.queryParams.subscribe(params => {
      var languageParam = params['language'];
      if (languageParam)
        this.language = languageParam;
    });
  }

  verificarMobile() {
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

  openLinkedin() {
    window.open('https://www.linkedin.com/in/fernandome/', '_blank');
  }

  openGithub() {
    window.open('https://github.com/MunizErthal', '_blank');
  }

  openInstagram() {
    window.open('https://www.instagram.com/fernandom.erthal/', '_blank');
  }
  
  openEmail() {
    window.open('mailto:fernando.m.erthal@gmail.com', '_blank');
  }
}
