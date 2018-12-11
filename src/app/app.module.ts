import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppState } from './state/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxsModule.forRoot([AppState]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment['googleMapsKey'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
