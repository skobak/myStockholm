import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Store } from '@ngxs/store';
import { v4 as uuid } from 'uuid';
import { AddPlace } from './../../actions/app.actions';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
})
export class BottomSheetComponent implements OnInit {
  name = '';
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private store: Store,
  ) {}

  cancel() {
    this.name = '';
    this.bottomSheetRef.dismiss();
  }
  addPlace() {
    if (this.name !== '') {
      const payload = {
        id: uuid(),
        name: this.name,
        coords: this.data.coords,
        isOpen: false,
      };
      this.store.dispatch(new AddPlace(payload));
      this.bottomSheetRef.dismiss();
    }
  }
  ngOnInit() {}
}
