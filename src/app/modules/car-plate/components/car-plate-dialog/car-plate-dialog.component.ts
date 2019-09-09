import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {CarPlateService} from '../../car-plate.service';
import {CarPlate} from '../../models/car-plate.model';

@Component({
  selector: 'app-car-plate-dialog',
  templateUrl: './car-plate-dialog.component.html',
  styleUrls: ['./car-plate-dialog.component.scss']
})
export class CarPlateDialogComponent implements OnInit {
  isEditMode = this.data && this.data.carPlate !== null;
  form = this.initForm();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<CarPlateDialogComponent>,
              private formBuilder: FormBuilder,
              private carPlateService: CarPlateService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  initForm() {
    const form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      carPlateNumber: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(7),
        this.carPlateNumberRegExpValidator
      ]
      ],
    });

    if (this.isEditMode) {
      form.patchValue(this.data.carPlate);
    }

    return form;
  }

  saveCarPlate({value, valid}) {
    if (valid) {
      if (this.isEditMode) {
        this.editCarPlate(value);
      } else {
        this.addCarPlate(value);
      }
    }
  }

  private addCarPlate(carPlate: CarPlate) {
    this.carPlateService.addCarPlate(carPlate)
      .subscribe(() => {
          this.showSnackBar('Element has been successfully added');
          this.dialogRef.close(true);
        },
        () => this.showSnackBar('Error occurred'));
  }

  private editCarPlate(carPlate: CarPlate) {
    carPlate.id = this.data.carPlate.id;

    this.carPlateService.updateCarPlate(carPlate)
      .subscribe(() => {
          this.showSnackBar('Element has been successfully updated');
          this.dialogRef.close(true);
        },
        () => this.showSnackBar('Error occurred'));
  }

  private carPlateNumberRegExpValidator(control: AbstractControl) {
    const regExp = new RegExp('^[A-Za-z][A-Za-z0-9]*$');

    return regExp.test(control.value) ? null : {wrongCarPlateNumber: true};
  }

  private showSnackBar(message) {
    this.snackBar.open(message, null, {
      duration: 5000,
    });
  }
}
