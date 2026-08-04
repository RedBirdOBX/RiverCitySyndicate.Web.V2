import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shows-detail-title',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './shows.detail.title.component.html',
  styleUrl: './shows.detail.title.component.scss'
})

export class ShowsDetailTitleComponent
{
    bannerImage = '/assets/imgs/page-titles/shows.jpg';
    @Input() showTitle: string | null = null;
}
