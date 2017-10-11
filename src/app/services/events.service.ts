import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event';

@Injectable()
export class EventsService {

  constructor(private http: HttpClient) { }

  GetFromApi(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:5000/api/values');
  }
}
