import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarPlateComponent} from './car-plate.component';
import {CarPlateListComponent} from './views/car-plate-list/car-plate-list.component';
import {CarPlateDialogComponent} from './components/car-plate-dialog/car-plate-dialog.component';
import {CarPlateRouting} from './car-plate.routing';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    CarPlateComponent,
    CarPlateListComponent,
    CarPlateDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarPlateRouting
  ]
})
export class CarPlateModule { }
