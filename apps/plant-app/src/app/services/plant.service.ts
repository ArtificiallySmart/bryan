import { Injectable } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root',
})
export class PlantService extends EntityCollectionServiceBase<Plant> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Plant', serviceElementsFactory);
  }
}
