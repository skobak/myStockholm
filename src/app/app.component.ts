import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyStockholm';
  // Stockholm center
  lat = 59.329483;
  lng = 18.068613;
  zoom = 11;
}
