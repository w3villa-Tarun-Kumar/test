import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpanelComponent } from './userpanel.component';

const routes: Routes = [
  { path:'userpanel', component:UserpanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpanelRoutingModule { }
