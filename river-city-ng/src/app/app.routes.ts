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
        path: 'shows/:id',
        loadComponent: () => import('./pages/shows/shows.detail.component').then(m => m.ShowsDetailComponent)
    },
    {
        path: 'photos',
        loadComponent: () => import('./pages/photos/photos.component').then(m => m.PhotosComponent)
    },
    {
        path: 'videos',
        loadComponent: () => import('./pages/videos/videos.component').then(m => m.VideosComponent)
    },
    {
        path: 'links',
        loadComponent: () => import('./pages/links/links.component').then(m => m.LinksComponent)
    },
    {
        path: 'songs',
        loadComponent: () => import('./pages/songs/songs.component').then(m => m.SongsComponent)
    },
    {
        path: 'style-guide',
        loadComponent: () => import('./pages/style-guide/style-guide.component').then(m => m.StyleGuideComponent)
    }
];
