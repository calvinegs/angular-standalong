import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img [src]="logoName">
  `,
  styles: [`
    img {
      padding:  1rem;
    }
  `]
})
export class LogoComponent {
  @Input() logoName = 'https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f7f9e5ecc6623f3ecbbe_logo-example2.svg'
}
