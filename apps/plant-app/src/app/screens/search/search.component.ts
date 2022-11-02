import { Component, Input } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import { distinctUntilChanged, Observable } from 'rxjs';
import { PlantService } from '../../services/plant.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'bryan-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input()
  query: string | undefined;

  plants$ = this.plantService.entities$;
  searchResult$!: Observable<Plant[]>;
  plantsFound = true;
  plants: Plant[] = [];

  constructor(
    private plantService: PlantService,
    private searchService: SearchService
  ) {
    this.plants$
      .pipe(distinctUntilChanged())
      .subscribe((plants) => (this.plants = plants));
  }

  async processInput() {
    if (this.query && this.query.length) {
      this.searchResult$ = this.searchService.searchPlants(this.query);
    }
  }

  isInCollection(resultId: string) {
    return this.plants.filter((e) => e.id === resultId).length > 0;
  }

  async addToCollection(plant: Plant) {
    console.log(plant);
    this.plantService.add(plant);
  }

  async createPlant(plant: Plant) {
    this.plantService.add(plant);
  }
}
