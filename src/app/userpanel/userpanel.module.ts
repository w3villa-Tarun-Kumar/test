import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { UserpanelRoutingModule } from './userpanel-routing.module';
import { UserpanelComponent } from './userpanel.component';


@NgModule({
  declarations: [
    UserpanelComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    UserpanelRoutingModule
  ]
})
export class UserpanelModule { }
