import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <ul class="navigation">
    <li>
      <a routerLink="/home" routerLinkActive="active">Home</a>
    </li>
    <li>
      <a routerLink="/domains" routerLinkActive="active">Others Domains</a>
    </li>
    <li>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </li>
  </ul>  `,
  styles: [`
    ul.navigation {

    }
    li {
        display: inline;
        margin: 0 10px;
    }

    li:hover {
        margin: 0 10px;
        cursor: pointer;
    }

    .active {
      font-weight: bold;
    }

  `]
})
export class NavigationComponent {

}
