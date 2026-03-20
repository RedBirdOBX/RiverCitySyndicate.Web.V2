import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/video';

@Injectable({ providedIn: 'root' })

export class VideoService
{
    private base = 'https://river-city-syndicate-web-api-h9ayercgergqc3d4.eastus-01.azurewebsites.net';

    constructor(private http: HttpClient) {}

    getVideos(): Observable<Video[]>
    {
        return this.http.get<Video[]>(`${this.base}/api/videos`);
    }
}