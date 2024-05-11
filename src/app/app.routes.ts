import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DebtsComponent } from './pages/debts/debts.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { PlansComponent } from './pages/plans/plans.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'debts', component: DebtsComponent },
    { path: 'plans', component: PlansComponent },
];
