import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';
import { ShowsDetailTitleComponent } from './shows.detail.title.component';

@Component({
  selector: 'app-shows-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ShowsDetailTitleComponent],
  templateUrl: './shows.detail.component.html',
  styleUrl: './shows.detail.component.scss'
})

export class ShowsDetailComponent implements OnInit
{
    show: Show | null = null;
    errorMessage: string = '';

    constructor(
        private route: ActivatedRoute,
        private showSvc: ShowService,
        private titleSvc: Title,
        private metaSvc: Meta
    ) {}

    ngOnInit(): void
    {
        const slug = this.route.snapshot.paramMap.get('slug');
        if (!slug)
        {
            this.errorMessage = 'Failed to load show. Please try again later.';
            return;
        }

        this.showSvc.getShowBySlug(slug).subscribe({
            next: show => {
                this.show = show;
                this.titleSvc.setTitle(`${show.title} - River City Syndicate`);
                if (show.description)
                {
                    this.metaSvc.updateTag({ name: 'description', content: show.description });
                }
            },
            error: error => this.errorMessage = error.message
        });
    }
}
