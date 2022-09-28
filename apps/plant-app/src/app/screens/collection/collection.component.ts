import { Component, OnInit } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import { firstValueFrom } from 'rxjs';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'bryan-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  constructor(private plantService: PlantService) {}

  plants: Plant[] = [];
  buttonText = 'Remove this plant from my collection';
  incompletePlants: number = 0;

  ngOnInit(): void {
    this.getPlants();
  }

  async getPlants() {
    this.plants = await firstValueFrom(this.plantService.getPlants());
    for (const plant of this.plants) {
      if (Object.values(plant).includes(null)) {
        this.incompletePlants++;
      }
    }
  }
}
