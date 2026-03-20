// src/app/services/photo.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({ providedIn: 'root' })

export class PhotoService
{
    private base = 'https://river-city-syndicate-web-api-h9ayercgergqc3d4.eastus-01.azurewebsites.net';

    constructor(private http: HttpClient) {}

    getPhotos(): Observable<Photo[]>
    {
        return this.http.get<Photo[]>(`${this.base}/api/photos`);
    }
}