import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const APP_ROUTES: Routes = [
  {
    path: 'car-plate',
    loadChildren: './modules/car-plate/car-plate.module#CarPlateModule',
  },
  {
    path: '**',
    redirectTo: 'car-plate'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {
}
