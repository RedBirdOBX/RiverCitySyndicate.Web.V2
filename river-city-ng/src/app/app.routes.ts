import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { VideosComponent } from './pages/videos/videos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent }
];

