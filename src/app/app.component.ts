import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {Router, RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}