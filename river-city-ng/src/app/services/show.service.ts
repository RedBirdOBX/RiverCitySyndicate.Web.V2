// src/app/services/show.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../models/show';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ShowService
{
    private base = 'https://river-city-syndicate-web-api-h9ayercgergqc3d4.eastus-01.azurewebsites.net';

    constructor(private http: HttpClient) {}

    getNextShow(): Observable<Show>
    {
        return this.http.get<Show>(`${this.base}/api/shows/nextshow`).pipe(
            catchError(error => {
                console.error('Error fetching next show:', error);
                return throwError(() => new Error('Failed to load next show. Please try again later.'));
            })
        );
    }

    getShows(): Observable<Show[]>
    {
        return this.http.get<Show[]>(`${this.base}/api/shows`).pipe(
            catchError(error => {
                console.error('Error fetching shows:', error);
                return throwError(() => new Error('Failed to load shows. Please try again later.'));
            })
        );
    }

}