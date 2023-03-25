import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about.component';
import { DomainComponent } from './pages/domain.component';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // component: HomeComponent,
    loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'domains',
    // component: DomainComponent
    loadComponent: () => import('./pages/domain.component').then(m => m.DomainComponent)
  },
  {
    path: 'about',
    // component: AboutComponent
    loadComponent: () => import('./pages/about.component').then(m => m.AboutComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
