import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-photos-title',
  imports: [ RouterLink ],
  templateUrl: './photos.title.component.html',
  styleUrl: './photos.title.component.scss'
})

export class PhotosTitleComponent
{
    bannerImage = '/assets/imgs/page-titles/photos.jpg';

}
