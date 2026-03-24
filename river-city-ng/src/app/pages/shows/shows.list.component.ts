import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';

@Component({
  selector: 'app-shows-list',
  imports: [CommonModule, NgForOf, RouterLink],
  templateUrl: './shows.list.component.html',
  styleUrl: './shows.list.component.scss'
})

export class ShowsListComponent  implements OnInit
{
    shows: Show[] = [];

    constructor(private showSvc: ShowService) {}

    ngOnInit(): void
    {
        this.showSvc.getShows().subscribe(shows => this.shows = shows);
    }
}
