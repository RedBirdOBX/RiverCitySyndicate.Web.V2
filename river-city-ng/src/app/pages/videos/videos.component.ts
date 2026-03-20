import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';
import { NgForOf } from '@angular/common';
import { VideosTitleComponent } from './videos.title.component';

@Component({
  selector: 'app-videos',
  imports: [RouterLink, NgForOf, VideosTitleComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})

export class VideosComponent
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
