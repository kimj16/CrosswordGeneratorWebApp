import { Routes } from '@angular/router';
import { CrosswordBuilderPageComponent } from './crossword-builder-page/crossword-builder-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    { path: 'builder', component: CrosswordBuilderPageComponent},
    { path: '', component: HomePageComponent},
];
