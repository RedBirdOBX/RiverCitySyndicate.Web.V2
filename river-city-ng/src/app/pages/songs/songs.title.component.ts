import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-songs-title',
  imports: [ RouterLink ],
  templateUrl: './songs.title.component.html',
  styleUrl: './songs.title.component.scss'
})

export class SongsTitleComponent
{
    bannerImage = '/assets/imgs/page-titles/photos.jpg';
}
