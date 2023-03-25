import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="container">
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis, sunt laudantium architecto repellendus illo aspernatur minus tenetur consequuntur facere vitae natus molestiae, in, ad et. Laborum sed amet adipisci et recusandae, illo perferendis quae deleniti id modi laboriosam ullam nulla expedita sit labore. Odit, vel exercitationem iure vitae dolores sequi labore quasi nemo, non optio rem totam obcaecati aspernatur culpa nihil perferendis itaque corporis in maxime dolorem quidem magni? Facere cupiditate fuga sunt quam praesentium. Dicta id explicabo obcaecati.</p>
  </div>
  `,
  styles: [`
    .container {
      padding: 3rem;
    }`
  ]
})
export class AboutComponent {

}
