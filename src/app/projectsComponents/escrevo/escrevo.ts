import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-escrevo',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './escrevo.html',
  styleUrls: ['./escrevo.scss', './../projects.scss', './../projects-mobile.scss'],
})
export class Escrevo {

  language: string = 'en';  // en ou pt
  mobileMenu = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private languageService: LanguageService) {
    this.loadParams();
    this.subscribeToLanguageChanges();
  }

  loadParams() {
    this.route.queryParams.subscribe(params => {
      var mobileMenu = params['mobileMenu'];
      if (mobileMenu)
        this.mobileMenu = mobileMenu;

      var language = params['language'];
      if (language)
        this.language = language;
    });
  }

  subscribeToLanguageChanges() {
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }
}
