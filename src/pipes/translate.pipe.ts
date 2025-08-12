import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';

import home from '../assets/translations/home.json';
import about from '../assets/translations/about.json';
import header from '../assets/translations/header.json';
import escrevo from '../assets/translations/escrevo.json';
import paranoia from '../assets/translations/paranoia.json';
import deucritico from '../assets/translations/deucritico.json';
import greengoblin from '../assets/translations/greengoblin.json';
import experiences from '../assets/translations/experiences.json';

const translationsFiles: any = {
  home: home,
  about: about,
  header: header,
  escrevo: escrevo,
  paranoia: paranoia,
  deucritico: deucritico,
  experiences: experiences,
  greengoblin: greengoblin
};

@Pipe({ name: 'translate', pure: false })
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(key: string, file: string): string {
    const translations = translationsFiles[file] || {};
    const lang = this.languageService.getLanguage();
    return translations[lang][key] || key;
  }
}