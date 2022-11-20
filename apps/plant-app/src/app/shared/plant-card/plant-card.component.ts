import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bryan-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss'],
})
export class PlantCardComponent {
  constructor(private modalService: NgbModal) {}
  closeResult = '';
  @Input()
  plant!: Plant;

  @Output()
  clickEvent = new EventEmitter<Plant>();

  open(content: unknown) {
    this.modalService.open(content);
  }
}
