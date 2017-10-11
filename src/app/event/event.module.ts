import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventComponent } from './event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventListComponent, EventCardComponent, EventComponent]
})
export class EventModule { }
