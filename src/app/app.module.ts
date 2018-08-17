import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { DetailsAlbumsComponent } from './albums/details.albums.component';
import { CountriesComponent } from './countries/countries.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: 'albums/:id', component: DetailsAlbumsComponent},
  { path: 'countries', component: CountriesComponent},
  { path: 'heroes', component: HeroFormComponent},
  { path: '404', component: ErrorComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ErrorComponent,
    HomeComponent,
    AlbumsComponent,
    DetailsAlbumsComponent,
    CountriesComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
