import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PressKitTitleComponent } from './press-kit.title.component';
import { PressKitAboutComponent } from './press-kit.about.component';
import { PressKitSongsComponent } from './press-kit.songs.component';
import { PressKitVenuesComponent } from './press-kit.venues.component';
import { VideosListComponent } from '../videos/videos.list.component';
import { ContactUsFormComponent } from '../contact-us/contact-us.form.component';

@Component({
  selector: 'app-press-kit',
  imports: [
    PressKitTitleComponent,
    PressKitAboutComponent,
    VideosListComponent,
    PressKitSongsComponent,
    PressKitVenuesComponent,
    ContactUsFormComponent
  ],
  templateUrl: './press-kit.component.html',
  styleUrl: './press-kit.component.scss'
})

export class PressKitComponent implements AfterViewInit
{
    readonly sections = [
        { id: 'about', label: 'About' },
        { id: 'videos', label: 'Videos' },
        { id: 'songs', label: 'Song List' },
        { id: 'venues', label: 'Venues' },
        { id: 'contact', label: 'Contact' }
    ];

    private host: ElementRef<HTMLElement> = inject(ElementRef);

    // The section named in the URL (/press-kit#songs), until the visitor picks another.
    private target = inject(ActivatedRoute).snapshot.fragment;

    ngAfterViewInit(): void
    {
        this.scrollToTarget();
    }

    // Sections above the target grow as their data arrives, so line it up again.
    // The timeout lets the new content render (and the router finish its own scroll) first.
    scrollToTarget(): void
    {
        setTimeout(() => {
            if (this.target) {
                // 'auto' would inherit Bootstrap's smooth scrolling and aim at a stale position.
                this.scrollTo(this.target, 'instant');
            }
        }, 100);
    }

    // A plain "#id" href would resolve against <base href="/"> and leave the page.
    jumpTo(event: Event, id: string): void
    {
        event.preventDefault();
        this.target = null;
        history.replaceState(history.state, '', `/press-kit#${id}`);
        this.scrollTo(id, 'smooth');
    }

    private scrollTo(id: string, behavior: ScrollBehavior): void
    {
        this.host.nativeElement.querySelector(`[id="${CSS.escape(id)}"]`)?.scrollIntoView({ behavior });
    }
}
