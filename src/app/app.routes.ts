import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'works', component: WorkComponent},
    { path: '', component: HomeComponent},
];