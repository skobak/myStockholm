import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Select, Store } from '@ngxs/store';
import { RemovePlace, ShowPopoup } from './actions/app.actions';
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
  zoomIn = 13;
  query = '';
  mapLoaded = false;
  opened: boolean;
  map: any;
  screenWidth: number;

  constructor(private bottomSheet: MatBottomSheet, private store: Store) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  mapReady(map) {
    this.mapLoaded = true;
    this.map = map;
  }

  mapClick(event) {
    const { coords } = event;
    this.openBottomSheet(coords);
  }

  delete(place) {
    this.store.dispatch(new RemovePlace(place.id));
  }
  focusOnPlace(place, sidenav) {
    const { coords } = place;
    if (this.map) {
      this.map.setZoom(this.zoomIn);
      this.map.setCenter({ lat: coords.lat, lng: coords.lng });
      this.store.dispatch(new ShowPopoup(place.id));
      // collapse side panel for mobile view
      if (this.screenWidth < 840) {
        sidenav.close();
      }
    }
  }

  openBottomSheet(coords): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: { coords },
    });
  }
}
