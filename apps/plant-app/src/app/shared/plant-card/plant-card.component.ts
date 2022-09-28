import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Input()
  buttonText!: string;

  @Output()
  clickEvent = new EventEmitter<Plant>();

  ngOnInit() {}

  buttonClick() {
    this.clickEvent.emit(this.plant);
  }
}
