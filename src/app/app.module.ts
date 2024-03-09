import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { PageMapComponent } from './components/page-map/page-map.component';
import { HttpClientModule } from '@angular/common/http';
import { PageFiltersComponent } from './components/page-filters/page-filters.component';
import { PageObservableComponent } from './components/page-observable/page-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageMapComponent,
    PageFiltersComponent,
    PageObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
