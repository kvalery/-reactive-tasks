import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMapComponent } from './components/page-map/page-map.component';

const routes: Routes = [
  {path: '', redirectTo: '/map', pathMatch: 'full'},
  {path: 'map', component: PageMapComponent, data: {title: 'PageMapComponent'}},
  { path: '**', component: PageMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
