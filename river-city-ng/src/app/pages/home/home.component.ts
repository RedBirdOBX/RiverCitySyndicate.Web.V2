import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

    screenHeight = window.innerHeight;
    bannerImage = '/assets/imgs/page-titles/home.jpg';
    nextShow?: Show;

    constructor(private showSvc: ShowService) {}

    ngOnInit(): void
    {
        this.updateHeight();

        this.showSvc.getNextShow().subscribe(show => {
            this.nextShow = show;

            // update show image path
            if (this.nextShow?.image) {
                this.nextShow.image = `url('/assets/imgs/content/gigs/${this.nextShow.image}')`;
            }
        });
    }

    @HostListener('window:resize')
    onResize() { this.updateHeight(); }

    private updateHeight() {
        this.screenHeight = window.innerHeight;
    }
}
