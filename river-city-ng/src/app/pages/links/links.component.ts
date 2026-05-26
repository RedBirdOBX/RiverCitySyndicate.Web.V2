import { Component } from '@angular/core';
import { LinksTitleComponent } from './links.title.component';
import { LinksListComponent } from './links.list.component';

@Component({
  selector: 'app-links',
  imports: [LinksTitleComponent, LinksListComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

}
