import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LevelUnComponent } from './pages/level-un/level-un.component';

export const routes: Routes = [{
    path : '',
    redirectTo : 'home',
    pathMatch : 'full',
},{
    path : 'home',
    component : HomeComponent,
},{
    path : 'level-one',
    component : LevelUnComponent,
},{
    path : '**',
    component : HomeComponent, 
}

];
