import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-domain',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Other domains</h2>

    <ul>
      <li>www.aprendetesting.com</li>
      <li>www.aprende-singlespa.com</li>
    </ul>
  `,
  styles: [
  ]
})
export class DomainComponent {

}
