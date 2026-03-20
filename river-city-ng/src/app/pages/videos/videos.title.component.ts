import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-videos-title',
  imports: [RouterLink],
  templateUrl: './videos.title.component.html',
  styleUrl: './videos.title.component.scss'
})
export class VideosTitleComponent
{
    bannerImage = '/assets/imgs/page-titles/videos.jpg';
}
