import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { VideosTitleComponent } from './videos.title.component';
import { VideosListComponent } from './videos.list.component';

@Component({
  selector: 'app-videos',
  imports: [RouterLink, VideosTitleComponent, VideosListComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})

export class VideosComponent
{
}
