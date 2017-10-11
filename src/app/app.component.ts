import { EventModel } from './models/event-model';
import { Component } from '@angular/core';
import { EventsService } from './services/events.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private eventsService: EventsService) {

    const event: EventModel = {
      id: 11,
      name: 'Event 11',
      description: 'description event 11',
      percentage: 27
    };

    this.eventsService.PostEvent(event).subscribe(() => {
      this.eventsService.GetFromApi().subscribe(
        events => console.log(events),
        err => console.log(err)
      );
    });

  }
}
