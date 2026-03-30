import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgForOf } from '@angular/common';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-videos-list',
  imports: [NgForOf],
  templateUrl: './videos.list.component.html',
  styleUrl: './videos.list.component.scss'
})

export class VideosListComponent
{
    videos: Video[] = [];

    constructor(private videoSvc: VideoService, private sanitizer: DomSanitizer) {}

    ngOnInit(): void
    {
        this.videoSvc.getVideos().subscribe(videos => this.videos = videos);
    }

    getSafeHtml(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
