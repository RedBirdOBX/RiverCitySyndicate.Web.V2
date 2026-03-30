import { Component } from '@angular/core';
import { VideosTitleComponent } from './videos.title.component';
import { VideosListComponent } from './videos.list.component';

@Component({
  selector: 'app-videos',
  imports: [VideosTitleComponent, VideosListComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})

export class VideosComponent
{
}
