import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';

@Component({
  selector: 'bryan-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss'],
})
export class PlantCardComponent implements OnInit {
  constructor() {}
  collectionText: string = '';
  @Input()
  plant!: Plant;

  @Output()
  addToCollectionEvent = new EventEmitter<string>();

  ngOnInit() {
    this.collectionText = this.plant.inCollection
      ? 'Already in your collection'
      : 'Add to your collection';
  }

  addToCollection() {
    this.plant.inCollection = !this.plant.inCollection;
    this.collectionText = 'Added to your collection!';
    this.addToCollectionEvent.emit(this.plant.id);
    console.log(this.plant.id);
  }
}
