import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {UrlsService} from './services/urls.service';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
  MatCardModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule,
  MatPaginatorModule,
];
const COMPONENTS = [
  ConfirmationDialogComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UrlsService
      ]
    };
  }
}
