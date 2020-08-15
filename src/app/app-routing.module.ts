import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Screen1Component } from './components/screen1/screen1.component';
import { Screen2Component } from './components/screen2/screen2.component';
import { Screen3Component } from './components/screen3/screen3.component';
import { Screen4Component } from './components/screen4/screen4.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
    path: 'screen1',
    component: Screen1Component
  },{
    path: 'screen2',
    component: Screen2Component
  },{
    path: 'screen3',
    component: Screen3Component
  },{
    path: 'screen4',
    component: Screen4Component
  },{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
