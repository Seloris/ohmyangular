import { EventModel } from './../../models/event-model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
    public eventList: EventModel[];

    constructor() { }

    ngOnInit() {
        this.eventList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
            return {
                id: i + '',
                name: 'Event N°' + i,
                description: 'La description de l\'event' + i,
                percentage: i * 10
            };
        });
    }
}
