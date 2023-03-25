import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerLayoutComponent } from './components/container-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ContainerLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standAloneComponent';
}
