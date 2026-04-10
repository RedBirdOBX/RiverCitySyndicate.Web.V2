import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'shows',
        loadComponent: () => import('./pages/shows/shows.component').then(m => m.ShowsComponent)
    },
    {
        path: 'photos',
        loadComponent: () => import('./pages/photos/photos.component').then(m => m.PhotosComponent)
    },
    {
        path: 'videos',
        loadComponent: () => import('./pages/videos/videos.component').then(m => m.VideosComponent)
    }
];
