import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    
    {path: '', component: Home, 
      data: {
        title: 'Project GreenGoblin',
        description:'!',
        ogUrl: 'projectgreengoblin.com.br',
        ogTitle: 'Project GreenGoblin',
        ogDescription: '!',
        ogImage: 'your og image'
      }
    },
];
