import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { PlantCardComponent } from './plant-card/plant-card.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoaderComponent, ModalComponent, PlantCardComponent],
  exports: [CommonModule, LoaderComponent, ModalComponent, PlantCardComponent],
})
export class SharedModule {}
