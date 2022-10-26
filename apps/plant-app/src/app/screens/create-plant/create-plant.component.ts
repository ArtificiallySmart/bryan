import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantService } from '../../services/plant.service';
import { Plant } from '@bryan/api-interfaces';

@Component({
  selector: 'bryan-create-plant',
  templateUrl: './create-plant.component.html',
  styleUrls: ['./create-plant.component.scss'],
})
export class CreatePlantComponent {
  constructor(
    private formBuilder: FormBuilder,
    private plantService: PlantService
  ) {}

  createPlantForm = this.formBuilder.group({
    commonName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
    scientificName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
    // fileInput: ['', [Validators.required]],
  });

  isInvalid(formControlName: string) {
    if (
      this.createPlantForm.get(formControlName)?.invalid &&
      (this.createPlantForm.get(formControlName)?.dirty ||
        this.createPlantForm.get(formControlName)?.touched)
    ) {
      return 'is-invalid';
    }
    return '';
  }

  errorMessage(formControlName: string) {
    if (this.createPlantForm.get(formControlName)?.errors?.['minLength']) {
      console.log('minlen');
      return 'minimal length is 3 characters';
    }
    return '';
  }

  get commonName() {
    return this.createPlantForm.get('commonName');
  }

  onSubmit(form: FormGroup) {
    console.log(form);
    console.log('Common name', form.value.commonName);
    console.log('Scientific name', form.value.scientificName);
    this.plantService.add(form.value as Plant);
  }
}
