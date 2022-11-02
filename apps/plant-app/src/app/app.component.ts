import { Component } from '@angular/core';
import { PlantService } from './services/plant.service';

@Component({
  selector: 'bryan-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private plantService: PlantService) {
    plantService.getAll();
  }
}
