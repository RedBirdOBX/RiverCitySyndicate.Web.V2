import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-links-title',
  imports: [RouterLink],
  templateUrl: './links.title.component.html',
  styleUrl: './links.title.component.scss'
})
export class LinksTitleComponent {
  bannerImage = '/assets/imgs/page-titles/links.jpg';
}
