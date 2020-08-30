
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
} from '@nebular/theme';
import { ConfirmDialogComponent } from './confirm-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    NbDialogModule,
NbCardModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  declarations: [ConfirmDialogComponent],
})
export class ConfirmDialogModule { }