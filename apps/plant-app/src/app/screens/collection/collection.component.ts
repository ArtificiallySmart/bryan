import { Component, OnInit } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
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
    //this.getPlants();
  }

  // getPlants() {
  //   this.plantService.getPlants().subscribe((plants) => (this.plants = plants));
  // }
}
