import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-shows',
  imports: [CommonModule, RouterLink, NgForOf],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss'
})

export class ShowsComponent implements OnInit
{

    bannerImage = '/assets/imgs/page-titles/shows.jpg';
    shows: Show[] = [];

    constructor(private showSvc: ShowService) {}

    ngOnInit(): void
    {
        this.showSvc.getShows().subscribe(shows => this.shows = shows);
    }
}
