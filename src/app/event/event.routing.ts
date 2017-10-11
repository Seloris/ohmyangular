import { AddEventComponent } from './add-event/add-event.component';
import { CanActivateAlways } from './../guards/aut.guards';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateNever } from '../guards/aut.guards';

const routes: Routes = [
    {
        path: '', component: EventComponent,
        children: [
            { path: '', component: EventListComponent, canActivate: [CanActivateAlways] },
            { path: 'create', component: AddEventComponent, canActivate: [CanActivateAlways] }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
