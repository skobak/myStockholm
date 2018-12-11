import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Select, Store } from '@ngxs/store';
import { RemovePlace } from './actions/app.actions';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Select(AppState.getPlaces) places$;
  title = 'MyStockholm';
  // Stockholm center
  lat = 59.329483;
  lng = 18.068613;
  zoom = 11;
  query = '';
  protected map: any;

  constructor(private bottomSheet: MatBottomSheet, private store: Store) {}

  protected mapReady(map) {
    this.map = map;
  }

  mapClick(event) {
    const { coords } = event;
    console.log(event);
    console.log(coords);
    this.openBottomSheet(coords);
  }
  delete(place) {
    this.store.dispatch(new RemovePlace(place.id));
  }
  focusOnPlace(place) {
    const { coords } = place;
    // this.lat = coords.lat;
    // this.lng = coords.lng;
    // this.zoom = 13;
    console.log(this.map);
    if (this.map) {
      console.log('clicked');
      this.map.setZoom(13);
      this.map.setCenter({ lat: coords.lat, lng: coords.lng });
    }
  }

  openBottomSheet(coords): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: { coords },
    });
  }
}
