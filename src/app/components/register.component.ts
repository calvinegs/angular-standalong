import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="registerForm" (ngSubmit)="sendForm()">
      <label for="first-name">Name: </label>
      <input id="first-name" type="text" formControlName="name">

      <label for="email">Email</label>
      <input id="email" type="email" formControlName="email">
      <button type="submit">Send</button>
    </form>
  `,
  styles: [`
  :host {
    flex: 1;
    padding: 4rem;
    display:flex;
    align-items: center;
    background: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-width: 300px;
  }

  label {
    margin-bottom: 0.5rem;
  }

  button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    width: 140px
  }

  button:active {
    background: #efe;
  }

  button:hover {
    background: #88aae1
  }
  `
  ]
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  sendForm() {
    console.log(this.registerForm.valid);
  }
}
