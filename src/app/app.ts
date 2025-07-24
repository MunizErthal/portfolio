import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TranslatePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.scss', './app-mobile.scss']
})
export class App {
  protected readonly title = signal('Fernando Muniz Erthal');

  language: string = 'en';  // en ou pt
  mobileMenu = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private languageService: LanguageService) {
    this.verifyMobile();
    this.loadLanguage();
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

  loadLanguage() {
    this.route.queryParams.subscribe(params => {
      var languageParam = params['language'];
      if (languageParam) {
        this.language = languageParam;
        this.languageService.setLanguage(this.language);
      }
    });
  }

  changeLanguage() {
    this.language = this.language === 'en' ? 'pt' : 'en';
    this.languageService.setLanguage(this.language);
  }

  toHome() {
    this.router.navigate(['/'], { queryParams: { language: this.language } });
  }

  toAbout() {
    this.router.navigate(['/about'], { queryParams: { language: this.language } });
  }

  toProjects() {
    this.router.navigate(['/projects'], { queryParams: { language: this.language, project: 'paranoia' } });
  }

  toExperiences() {
    this.router.navigate(['/experiences'], { queryParams: { language: this.language } });
  }
}
