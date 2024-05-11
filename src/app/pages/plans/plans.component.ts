import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [
    BarChartComponent,
    MatExpansionModule,
    MatCard,
    MatCardContent,
    MatIconModule,

  ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
}
