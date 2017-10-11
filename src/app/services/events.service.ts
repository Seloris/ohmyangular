import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

  constructor(private http: Http) { }

  GetFromApi() {
    this.http.get('localhost:5000/api/value')
      .map(x => x.json())
      .subscribe(
        data => console.log('ok'),
        err => console.log(err)
      );
  }
}
