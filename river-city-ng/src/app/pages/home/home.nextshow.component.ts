import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-home-nextshow',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.nextshow.component.html',
  styleUrl: './home.nextshow.component.scss'
})

export class HomeNextshowComponent implements OnInit
{

    nextShow?: Show;
    errorMessage: string = '';
    loading: boolean = true;

    constructor(private showSvc: ShowService) {}

    ngOnInit(): void
    {
        this.showSvc.getNextShow().subscribe({
            next: show => {
                this.nextShow = show;

                // update show image path
                if (this.nextShow?.image) {
                    this.nextShow.image = `url('/assets/imgs/content/gigs/${this.nextShow.image}')`;
                }

                this.loading = false;
            },
            error: error => { this.errorMessage = error.message; this.loading = false; }
        });
    }
}
