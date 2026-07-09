import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-style-guide-title',
  imports: [RouterLink],
  templateUrl: './style-guide.title.component.html',
  styleUrl: './style-guide.title.component.scss'
})

export class StyleGuideTitleComponent
{
    bannerImage = '/assets/imgs/page-titles/links.jpg';
}
