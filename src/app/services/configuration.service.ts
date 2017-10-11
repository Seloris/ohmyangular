import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConfigurationService {
  public load(): Promise<boolean> {
    return new Promise(resolve =>
      setTimeout(() => resolve(true), 1000)
    );
  }
}
