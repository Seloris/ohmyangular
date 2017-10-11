import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: EventComponent },
  { path: 'list', component: EventListComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
