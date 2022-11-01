import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'bryan-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {
  loading$ = this.plantService.loading$;
  plants$ = this.plantService.entities$;
  incompletePlants$ = this.plants$.pipe(
    map((plants) => {
      let count = 0;
      for (const plant of plants) {
        if (Object.values(plant).includes(null)) {
          count++;
        }
      }
      return count;
    })
  );

  buttonText = 'Remove this plant from my collection';

  constructor(private plantService: PlantService) {}

  incompletePlants = 0;
}
