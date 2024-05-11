import { Component } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';

interface Category {
  food: string;
  drinks: string;
  generalExpenses: string;
  montlhyPayment: string;
  transport: string;
}

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HeaderComponent,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    MatPaginator, 
    MatPaginatorModule

  ],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent {

}
