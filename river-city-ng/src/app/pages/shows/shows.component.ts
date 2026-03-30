import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsTitleComponent } from './shows.title.component';
import { ShowsListComponent } from './shows.list.component';

@Component({
  selector: 'app-shows',
  imports: [CommonModule, ShowsTitleComponent, ShowsListComponent],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss'
})

export class ShowsComponent
{
}
