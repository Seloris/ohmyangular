import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../models/event-model';

@Injectable()
export class EventsService {

  constructor(private http: HttpClient) { }

  GetFromApi(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${environment.apiUrl}/api/values`);
  }
}
