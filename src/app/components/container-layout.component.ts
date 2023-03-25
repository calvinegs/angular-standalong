import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { NavigationComponent } from './navigation.component';

@Component({
  selector: 'app-container-layout',
  standalone: true,
  imports: [CommonModule, LogoComponent, NavigationComponent],
  template: `
    <app-logo></app-logo>
    <app-navigation></app-navigation>
    <div class="container">
        <ng-content></ng-content>
    </div>
    <footer>2023</footer>
  `,
  styles: [`
    .container {
      display: flex;
      background-color: #f5f5f5;
      height: 50vh;
      flex-direction: column;
      padding: 3rem;
    }
  `
  ]
})
export class ContainerLayoutComponent {

}
