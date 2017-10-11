import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'event' },
  { path: 'event', loadChildren: './event/event.module#EventModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
