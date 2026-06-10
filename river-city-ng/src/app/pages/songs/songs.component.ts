import { Component } from '@angular/core';
import { SongsTitleComponent } from './songs.title.component';
 

@Component({
  selector: 'app-songs',
  imports: [SongsTitleComponent],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss'
})
export class SongsComponent {

}
