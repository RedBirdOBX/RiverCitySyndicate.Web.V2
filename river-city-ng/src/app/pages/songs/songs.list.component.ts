import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';
import { Song } from '../../models/song';

@Component({
  selector: 'app-songs-list',
  imports: [],
  templateUrl: './songs.list.component.html',
  styleUrl: './songs.list.component.scss'
})

export class SongsListComponent implements OnInit
{
    songs: Song[] = [];
    errorMessage: string = '';
    loading: boolean = true;

    constructor(private songSvc: SongService) {}

    ngOnInit(): void
    {
        this.songSvc.getSongs().subscribe({
            next: songs => { this.songs = songs.filter(song => song.active); this.loading = false; },
            error: error => { this.errorMessage = error.message; this.loading = false; }
        });
    }

    isOriginal(artist: string): boolean
    {
        return artist.toLowerCase() === 'original';
    }
}
