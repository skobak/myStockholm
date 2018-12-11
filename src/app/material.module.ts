import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';

const module = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatSelectModule,
];
@NgModule({
  imports: module,
  exports: module,
})
export class MaterialModule {}
