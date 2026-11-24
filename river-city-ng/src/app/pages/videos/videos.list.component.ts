import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-videos-list',
  imports: [],
  templateUrl: './videos.list.component.html',
  styleUrl: './videos.list.component.scss'
})
export class VideosListComponent implements OnInit, AfterViewInit {
  /** When set, only the first `limit` active videos are shown. */
  @Input() limit?: number;
  /** Uses the tighter section.sm spacing. */
  @Input() compact = false;
  @Input() heading = 'Videos Gallery';
  @Input() intro = 'A collection of the latest videos.';
  /** Fires once loading has finished, whether it succeeded or not. */
  @Output() loaded = new EventEmitter<void>();

  videos: Video[] = [];
  errorMessage: string = '';
  loading: boolean = true;
  selectedVideoUrl: SafeResourceUrl | null = null;
  selectedVideoTitle = '';

  @ViewChild('videoModal') modalEl!: ElementRef<HTMLElement>;

  constructor(
    private videoSvc: VideoService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.videoSvc.getVideos().subscribe({
      next: videos => {
        this.videos = this.limit ? videos.filter(video => video.active).slice(0, this.limit) : videos;
        this.loading = false;
        this.loaded.emit();
      },
      error: error => { this.errorMessage = error.message; this.loading = false; this.loaded.emit(); }
    });
  }

  ngAfterViewInit(): void {
    this.modalEl.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.selectedVideoUrl = null;
      this.cdr.detectChanges();
    });
  }

  thumbnailUrl(html: string): string {
    return `https://img.youtube.com/vi/${this.extractVideoId(html)}/hqdefault.jpg`;
  }

  selectVideo(video: Video): void {
    const id = this.extractVideoId(video.html);
    this.selectedVideoTitle = video.description;
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?autoplay=1`
    );
  }

  private extractVideoId(html: string): string {
    const match = html.match(/youtube\.com\/embed\/([^?'"]+)/);
    return match ? match[1] : '';
  }
}
