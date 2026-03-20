import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import { NgForOf } from '@angular/common';
import { ShowsTitleComponent } from './shows.title.component';

@Component({
  selector: 'app-shows',
  imports: [CommonModule, RouterLink, NgForOf, ShowsTitleComponent],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.scss'
})

export class ShowsComponent implements OnInit
{
    shows: Show[] = [];

    constructor(private showSvc: ShowService) {}

    ngOnInit(): void
    {
        this.showSvc.getShows().subscribe(shows => this.shows = shows);
    }
}
