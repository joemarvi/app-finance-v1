import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './pages/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-finance-v1';
}
