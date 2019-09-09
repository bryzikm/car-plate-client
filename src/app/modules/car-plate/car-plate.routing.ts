import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CarPlateComponent} from './car-plate.component';
import {CarPlateListComponent} from './views/car-plate-list/car-plate-list.component';


const CAR_PLATE_ROUTES: Routes = [
  {
    path: '',
    component: CarPlateComponent,
    children: [
      {
        path: '',
        component: CarPlateListComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CAR_PLATE_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class CarPlateRouting {
}
