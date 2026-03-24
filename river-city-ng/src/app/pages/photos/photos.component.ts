import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { PhotosTitleComponent } from './photos.title.component';
import { PhotosGalleryComponent } from './photos.gallery.component';

@Component({
  selector: 'app-photos',
  imports: [CommonModule, RouterLink, PhotosTitleComponent, PhotosGalleryComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})

export class PhotosComponent
{

}
