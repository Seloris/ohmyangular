import { EventsService } from './../../services/events.service';
import { CreateEventModel } from './../../models/event-model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

    public createEvent: CreateEventModel = {};
    public isDebug: boolean;

    constructor(private eventsService: EventsService) { }

    ngOnInit() {
    }

    toggleDebug() {
        this.isDebug = !this.isDebug;
    }

    onSubmit() {
        this.eventsService.postEvent(this.createEvent).subscribe(() => {
            alert('OK');
        });
    }
}
