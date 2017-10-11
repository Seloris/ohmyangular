import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class CanActivateAlways implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}

@Injectable()
export class CanActivateNever implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}
