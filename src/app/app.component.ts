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
    this.eventsService.GetFromApi().subscribe(
      events => console.log(events),
      err => console.log(err)
    );
  }
}
