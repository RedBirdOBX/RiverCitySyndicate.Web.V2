import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-shows-title',
  imports: [ RouterLink ],
  templateUrl: './shows.title.component.html',
  styleUrl: './shows.title.component.scss'
})

export class ShowsTitleComponent
{
    bannerImage = '/assets/imgs/page-titles/shows.jpg';

}
