import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SongService
{
    private base = 'https://river-city-syndicate-web-api-h9ayercgergqc3d4.eastus-01.azurewebsites.net';

    constructor(private http: HttpClient) {}

    getSongs(): Observable<Song[]>
    {
        return this.http.get<Song[]>(`${this.base}/api/songs`).pipe(
            catchError(error => {
                console.error('Error fetching songs:', error);
                return throwError(() => new Error('Failed to load songs. Please try again later.'));
            })
        );
    }
}
