import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CountriesModule } from '../countries/countries.module';



@NgModule({
  declarations: [
    SidebarComponent,
    AboutPageComponent,
    HomePageComponent,
    ContactComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CountriesModule,
  ],
  exports: [
    SidebarComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
