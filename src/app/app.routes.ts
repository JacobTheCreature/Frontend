import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'game-frame/:id',
        component: HomeComponent
    },
    {
        path: '',
        component: DashboardComponent
    }
];
