import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo';
import { NgForOf } from '@angular/common';
import { PhotosTitleComponent } from './photos.title.component';

@Component({
  selector: 'app-photos',
  imports: [CommonModule, RouterLink, NgForOf, PhotosTitleComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})

export class PhotosComponent implements OnInit
{
    photos: Photo[] = [];

    constructor(private photoSvc: PhotoService) {}

    ngOnInit(): void
    {
        this.photoSvc.getPhotos().subscribe(photos => this.photos = photos);
    }

    getPhotoDataSrc(filename: string): string {
        return `/assets/imgs/content/gallery/${filename}`;
    }

    getPhotoDataSubHtml(photo: Photo): string {
        return `<h4 class='text-white'>${photo.heading}</h4><p>${photo.photoDate}</p>`;
    }

    getPhotoPath(filename: string): string {
        return `/assets/imgs/content/gallery/${filename}`;
    }
}
