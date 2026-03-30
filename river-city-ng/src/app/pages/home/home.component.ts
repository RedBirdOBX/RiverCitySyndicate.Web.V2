import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from "./home.banner.component";
import { HomeAboutComponent } from './home.about.component';
import { HomeNextshowComponent } from './home.nextshow.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeBannerComponent, HomeAboutComponent, HomeNextshowComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent
{
}
