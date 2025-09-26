import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LevelUnComponent } from './pages/level-un/level-un.component';
import { LevelTwoComponent } from './pages/level-two/level-two.component';
import { LoseComponent } from './pages/lose/lose.component';

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
    path : 'level-two',
    component : LevelTwoComponent,
},{
    path : 'lose',
    component : LoseComponent,
},
{
    path : '**',
    component : HomeComponent, 
}

];
