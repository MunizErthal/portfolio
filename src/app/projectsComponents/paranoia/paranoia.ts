import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paranoia',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './paranoia.html',
  styleUrls: ['./paranoia.scss', './../projects.scss', './../projects-mobile.scss'],
})
export class Paranoia {

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
