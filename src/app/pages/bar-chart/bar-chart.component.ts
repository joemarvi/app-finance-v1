import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {

}
