import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';
import { HomeBannerComponent } from "./home.banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HomeBannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

    nextShow?: Show;

    constructor(private showSvc: ShowService) {}

    ngOnInit(): void
    {
        this.showSvc.getNextShow().subscribe(show => {
            this.nextShow = show;

            // update show image path
            if (this.nextShow?.image) {
                this.nextShow.image = `url('/assets/imgs/content/gigs/${this.nextShow.image}')`;
            }
        });
    }
}
