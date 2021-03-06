import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, empty } from 'rxjs';
import { first, catchError } from 'rxjs/operators';
import { Room, RoomService } from './room.service';

@Injectable({
    providedIn: 'root'
})
export class RoomResolver implements Resolve<Room> {
    constructor (private roomService: RoomService) {}

    public resolve (route: ActivatedRouteSnapshot): Observable<Room> {
        return this.roomService.getRoom(route.params.id).pipe(
            first(),
            catchError(() => empty())
        );
    }

}
