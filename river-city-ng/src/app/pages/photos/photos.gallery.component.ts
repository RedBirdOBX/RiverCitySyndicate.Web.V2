import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';
import { PhotoService } from '../../services/photo.service';


@Component({
  selector: 'app-photos-gallery',
  imports: [],
  templateUrl: './photos.gallery.component.html',
  styleUrl: './photos.gallery.component.scss'
})

export class PhotosGalleryComponent implements OnInit
{

    photos: Photo[] = [];
    selectedPhoto: Photo | null = null;

    constructor(private photoSvc: PhotoService) {}

    ngOnInit(): void
    {
        this.photoSvc.getPhotos().subscribe(photos => this.photos = photos);
    }

    getPhotoPath(filename: string): string {
        return `/assets/imgs/content/gallery/${filename}`;
    }

    selectPhoto(photo: Photo): void {
        this.selectedPhoto = photo;
    }
}
