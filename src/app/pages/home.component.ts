import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../components/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  template: `
  <div class="sections">
    <div class="welcome">
      <h1>Yes, {{domainName}} available for sale</h1>
      <p>For instantly purchase. please make a paypal request</p>
      <button>Buy now for {{price | currency}}</button>
    </div>
    <app-register></app-register>
  </div>  `,
  styles: [
  ]
})
export class HomeComponent {
  domainName = "www.aprendetypescript.com";
  price = 100;
}
