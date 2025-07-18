import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Experiences } from './experiences/experiences';
import { Paranoia } from './projectsComponents/paranoia/paranoia';
import { GreenGoblin } from './projectsComponents/green-goblin/green-goblin';
import { Escrevo } from './projectsComponents/escrevo/escrevo';
import { Deucritico } from './projectsComponents/deucritico/deucritico';

export const routes: Routes = [
  {
    path: '', component: Home
  }, {
    path: 'about', component: About
  }, {
    path: 'projects', component: Projects,
    children: [
      { path: 'escrevo', component: Escrevo },
      { path: 'paranoia', component: Paranoia },
      { path: 'deucritico', component: Deucritico },
      { path: 'greengoblin', component: GreenGoblin }
    ]
  }, {
    path: 'experiences', component: Experiences
  }
];
