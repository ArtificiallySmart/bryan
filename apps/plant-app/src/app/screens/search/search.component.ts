import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'bryan-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private plantService: PlantService) {}

  searchData: any;

  ngOnInit(): void {
    this.searchPlants();
  }

  searchPlants() {
    this.plantService
      .searchPlants()
      .subscribe((plants) => (this.searchData = plants));
  }
}
