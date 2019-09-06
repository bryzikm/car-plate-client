import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouting} from './app.routing';
import {SharedModule} from './shared/shared.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
