import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { UserpanelRoutingModule } from './userpanel-routing.module';
import { UserpanelComponent } from './userpanel.component';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserpanelComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    UserpanelRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserpanelModule { }
