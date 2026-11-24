import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SongService } from '../../services/song.service';
import { Song } from '../../models/song';

const ORIGINALS_SHOWN = 6;
const COVERS_SHOWN = 12;

@Component({
  selector: 'app-press-kit-songs',
  imports: [RouterLink],
  templateUrl: './press-kit.songs.component.html',
  styleUrl: './press-kit.songs.component.scss'
})

export class PressKitSongsComponent implements OnInit
{
    @Output() loaded = new EventEmitter<void>();

    originals: Song[] = [];
    covers: Song[] = [];
    errorMessage = '';
    loading = true;

    private songSvc = inject(SongService);

    ngOnInit(): void
    {
        this.songSvc.getSongs().subscribe({
            next: songs => {
                const active = songs.filter(song => song.active);
                const isOriginal = (song: Song) => song.artist.toLowerCase().startsWith('original');
                this.originals = this.sample(active.filter(isOriginal), ORIGINALS_SHOWN);
                this.covers = this.sample(active.filter(song => !isOriginal(song)), COVERS_SHOWN);
                this.loading = false;
                this.loaded.emit();
            },
            error: error => { this.errorMessage = error.message; this.loading = false; this.loaded.emit(); }
        });
    }

    // Picks `count` songs spread evenly through the list, so the sample isn't just the "A" titles.
    private sample(songs: Song[], count: number): Song[]
    {
        if (songs.length <= count) {
            return songs;
        }
        return Array.from({ length: count }, (_, i) => songs[Math.floor(i * songs.length / count)]);
    }
}
