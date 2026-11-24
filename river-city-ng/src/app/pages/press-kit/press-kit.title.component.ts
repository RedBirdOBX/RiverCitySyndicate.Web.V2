import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-press-kit-title',
  imports: [RouterLink],
  templateUrl: './press-kit.title.component.html',
  styleUrl: './press-kit.title.component.scss'
})

export class PressKitTitleComponent
{
    bannerImage = '/assets/imgs/page-titles/links.jpg';
}
