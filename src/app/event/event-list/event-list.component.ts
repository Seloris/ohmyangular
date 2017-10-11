import { EventModel } from './../../models/event-model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
    public eventList: EventModel[];

    constructor() { }


    ngOnInit() {
        this.eventList = [
        ];
    }

}
