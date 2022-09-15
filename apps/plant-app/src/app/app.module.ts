import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './screens/home/home.component';
import { CollectionComponent } from './screens/collection/collection.component';
import { PlantCardComponent } from './shared/plant-card/plant-card.component';
import { SearchComponent } from './screens/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NavbarComponent,
    HomeComponent,
    CollectionComponent,
    PlantCardComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
