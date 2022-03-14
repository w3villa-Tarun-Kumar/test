import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpanelComponent } from './userpanel/userpanel.component';

const routes: Routes = [
  {
    path:'routing', loadChildren:()=>import('./routing/routing.module').then(mod=>mod.RoutingModule )
  },
  {
    path:'user', component:UserpanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
