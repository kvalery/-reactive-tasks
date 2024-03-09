import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMapComponent } from './components/page-map/page-map.component';
import { PageFiltersComponent } from './components/page-filters/page-filters.component';
import { PageObservableComponent } from './components/page-observable/page-observable.component';

const routes: Routes = [
  {path: '', redirectTo: '/map', pathMatch: 'full'},
  {path: 'map', component: PageMapComponent, data: {title: 'PageMapComponent'}},
  {path: 'filters', component: PageFiltersComponent, data: {title: 'PageFiltersComponent'}},
  {path: 'observable', component: PageObservableComponent, data: {title: 'PageObservableComponent'}},
  { path: '**', component: PageMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
