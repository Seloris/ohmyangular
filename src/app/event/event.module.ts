import { routing } from './event.routing';
import { FormsModule } from '@angular/forms';
import { PercentageDirective } from './../directives/percentage-color.directive';
import { SuffixPipe } from './../pipes/suffix.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventComponent } from './event.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        EventListComponent,
        EventCardComponent,
        EventComponent,
        SuffixPipe,
        PercentageDirective],
    exports: [EventComponent]
})
export class EventModule { }
