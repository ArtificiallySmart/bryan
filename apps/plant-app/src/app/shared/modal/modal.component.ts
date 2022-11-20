import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Plant } from '@bryan/api-interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bryan-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(public modalService: NgbModal) {}

  @Input()
  plant?: Plant;

  plantForm = new FormGroup({
    commonName: new FormControl(''),
    scientificName: new FormControl(''),
    //image: new FormControl(''),
  });

  ngOnInit() {
    if (this.plant) {
      this.plantForm.setValue({
        commonName: this.plant.commonName || '',
        scientificName: this.plant.scientificName || '',
        //image: this.plant.imageUrl || '',
      });
    }
  }

  submit() {
    return;
  }

  close() {
    this.modalService.dismissAll();
  }
}
