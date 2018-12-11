import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Store } from '@ngxs/store';
import { AddPlace } from './../../actions/app.actions';
import { v4 as uuid } from 'uuid';
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
    const payload = {
      id: uuid(),
      name: this.name,
      coords: this.data.coords,
    };
    this.store.dispatch(new AddPlace(payload));
    this.bottomSheetRef.dismiss();
  }
  ngOnInit() {}
}
