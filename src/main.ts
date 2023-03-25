// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
// import { routes } from "./app/app-routing.module"

import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers:[
      provideRouter([
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          loadComponent: () => import('./app/pages/home.component').then(m => m.HomeComponent)
        },
        {
          path: 'domains',
          loadComponent: () => import('./app/pages/domain.component').then(m => m.DomainComponent)
        },
        {
          path: 'about',
          loadComponent: () => import('./app/pages/about.component').then(m => m.AboutComponent)
        }
      ])
  ]
}).catch(err => console.error(err));