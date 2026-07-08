import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';
import { ShowsTitleComponent } from './shows.title.component';

@Component({
  selector: 'app-shows-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ShowsTitleComponent],
  templateUrl: './shows.detail.component.html',
  styleUrl: './shows.detail.component.scss'
})

export class ShowsDetailComponent implements OnInit
{
    show: Show | null = null;
    errorMessage: string = '';

    constructor(
        private route: ActivatedRoute,
        private showSvc: ShowService
    ) {}

    ngOnInit(): void
    {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.showSvc.getShowById(id).subscribe({
            next: show => this.show = show,
            error: error => this.errorMessage = error.message
        });
    }
}
