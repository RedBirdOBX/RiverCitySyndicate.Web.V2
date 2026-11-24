import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';

@Component({
  selector: 'app-press-kit-venues',
  imports: [],
  templateUrl: './press-kit.venues.component.html',
  styleUrl: './press-kit.venues.component.scss'
})

export class PressKitVenuesComponent implements OnInit
{
    @Output() loaded = new EventEmitter<void>();

    venues: Show[] = [];
    errorMessage = '';
    loading = true;

    private showSvc = inject(ShowService);

    ngOnInit(): void
    {
        this.showSvc.getShows().subscribe({
            next: shows => {
                this.venues = this.currentVenues(shows);
                this.loading = false;
                this.loaded.emit();
            },
            error: error => { this.errorMessage = error.message; this.loading = false; this.loaded.emit(); }
        });
    }

    // One entry per venue played in the last 12 months or booked ahead; private events are left out.
    private currentVenues(shows: Show[]): Show[]
    {
        const cutoff = new Date();
        cutoff.setFullYear(cutoff.getFullYear() - 1);

        const byName = new Map<string, Show>();
        for (const show of shows) {
            if (show.active && show.title !== 'Private Event' && new Date(show.date) >= cutoff) {
                byName.set(show.title, show);
            }
        }
        return [...byName.values()].sort((a, b) => a.title.localeCompare(b.title));
    }
}
