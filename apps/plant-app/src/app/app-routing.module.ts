import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './screens/collection/collection.component';
import { HomeComponent } from './screens/home/home.component';
import { SearchComponent } from './screens/search/search.component';
import { CreatePlantComponent } from './screens/create-plant/create-plant.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'search', component: SearchComponent },
  { path: 'createplant', component: CreatePlantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
