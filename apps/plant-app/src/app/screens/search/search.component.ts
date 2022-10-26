import { Component, Input } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import { Observable } from 'rxjs';
import { PlantService } from '../../services/plant.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'bryan-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(
    private plantService: PlantService,
    private searchService: SearchService
  ) {}

  @Input()
  query: string | undefined;

  searchResult$!: Observable<Plant[]>;
  plantsFound = true;

  async processInput() {
    if (this.query && this.query.length) {
      this.searchResult$ = this.searchService.searchPlants(this.query);
    }
  }

  buttonText(inCollection: boolean) {
    return inCollection
      ? 'Already in your collection'
      : 'Add to your collection';
  }

  async addToCollection(plant: Plant) {
    this.plantService.add(plant);
  }

  async createPlant(plant: Plant) {
    this.plantService.add(plant);
  }
}
