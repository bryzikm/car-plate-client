import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarPlateListComponent } from './modules/car-plate/views/car-plate-list/car-plate-list.component';
import { CarPlateDialogComponent } from './modules/car-plate/components/car-plate-dialog/car-plate-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CarPlateListComponent,
    CarPlateDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
