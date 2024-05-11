import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    BarChartComponent,
    MatCardModule,
    MatIcon,
    CommonModule,
    MatDatepickerModule,
    MatExpansionModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor() { }
  totalReceived: number = 1000.000;
  totalExpenses: number = 500;
  balanceDash: number = this.totalReceived - this.totalExpenses;

  ngOnInit() {
  }

  panelOpenState = false;

}
