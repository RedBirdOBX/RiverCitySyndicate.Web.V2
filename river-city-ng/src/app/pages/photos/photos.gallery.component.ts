import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Photo } from '../../models/photo';
import { PhotoService } from '../../services/photo.service';


@Component({
  selector: 'app-photos-gallery',
  imports: [NgForOf],
  templateUrl: './photos.gallery.component.html',
  styleUrl: './photos.gallery.component.scss'
})

export class PhotosGalleryComponent implements OnInit
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
