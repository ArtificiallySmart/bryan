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

  ngOnInit(): void {
    this.getPlants();
  }

  async getPlants() {
    this.plants = await firstValueFrom(this.plantService.getPlants());
  }
}
