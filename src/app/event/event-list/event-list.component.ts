import { EventsService } from './../../services/events.service';
import { EventModel } from './../../models/event-model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
    public eventList: EventModel[];

    constructor(private eventsService: EventsService) { }

    ngOnInit() {
      this.eventsService.GetFromApi().subscribe(list => this.eventList = list);
    }
}
