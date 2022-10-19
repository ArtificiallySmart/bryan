import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import { firstValueFrom, Observable } from 'rxjs';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'bryan-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private plantService: PlantService) {}

  @Input()
  query: string | undefined;

  searchResult!: Plant[];
  plantsFound: boolean = true;

  ngOnInit(): void {}

  async processInput() {
    if (this.query && this.query.length) {
      this.searchResult = await this.searchPlants(this.query);
    }
  }

  async searchPlants(query: string) {
    let result = await firstValueFrom(this.plantService.searchPlants(query));
    this.plantsFound = !!result.length;
    return result;
  }

  buttonText(inCollection: boolean) {
    return inCollection
      ? 'Already in your collection'
      : 'Add to your collection';
  }

  async addToCollection(plant: Plant) {
    this.plantService.addPlant(plant.id);
    //plant.inCollection = true;
  }

  async createPlant(plant: Plant) {
    this.plantService.createPlant(plant);
  }
}
