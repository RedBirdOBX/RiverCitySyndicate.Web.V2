import { Component } from '@angular/core';
import { SongsTitleComponent } from './songs.title.component';
import { SongsListComponent } from './songs.list.component';

@Component({
  selector: 'app-songs',
  imports: [SongsTitleComponent, SongsListComponent],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss'
})
export class SongsComponent {

}
