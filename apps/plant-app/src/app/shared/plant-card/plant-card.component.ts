import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';

@Component({
  selector: 'bryan-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss'],
})
export class PlantCardComponent implements OnInit {
  constructor() {}
  @Input()
  plant!: Plant;
  ngOnInit(): void {}
}
