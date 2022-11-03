import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bryan-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor() {}

  open(){
    console.log('open')
  }

  ngOnInit(): void {}
}
