
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: LoginComponent},

];

export const ROUTING: ModuleWithProviders<any> = RouterModule.forRoot(ROUTES);
