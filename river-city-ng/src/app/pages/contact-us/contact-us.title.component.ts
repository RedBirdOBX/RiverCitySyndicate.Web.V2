import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-us-title',
  imports: [RouterLink],
  templateUrl: './contact-us.title.component.html',
  styleUrl: './contact-us.title.component.scss'
})

export class ContactUsTitleComponent
{
    bannerImage = '/assets/imgs/page-titles/links.jpg';
}
