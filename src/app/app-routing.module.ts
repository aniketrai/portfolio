import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
