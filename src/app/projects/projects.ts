import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  imports: [RouterOutlet],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  language: string = 'en';  // en ou pt
  mobileMenu = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private languageService: LanguageService) {
    this.verificarMobile();
    this.loadProject();
    this.loadLanguage();
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

  loadProject() {
    this.route.queryParams.subscribe(params => {
      var projectParam = params['project'];
      if (projectParam) {
        var projectName = projectParam == '' ? 'paranoia' : projectParam;
        this.changeProject(projectName);
      }
    });
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

  changeProject(projectName: string) {
      this.router.navigate([projectName], { relativeTo: this.route });
  }
}