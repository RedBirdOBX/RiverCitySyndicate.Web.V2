import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  imports: [],
  templateUrl: './home.banner.component.html',
  styleUrl: './home.banner.component.scss'
})

export class HomeBannerComponent implements OnInit
{
    bannerImage = '/assets/imgs/page-titles/home.jpg';
    screenHeight = window.innerHeight;

    ngOnInit(): void
    {
        this.updateHeight();
    }

    @HostListener('window:resize')
    onResize() { this.updateHeight(); }

    private updateHeight()
    {
        this.screenHeight = window.innerHeight;
    }
}
