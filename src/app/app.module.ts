import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FRModule } from './dynload/factory-resolver/fr.module';
import { LACModule } from './dynload/loaded-and-compiled/lac.module';
import { NMLModule } from './dynload/ng-module-loader/nml.module';
import { OTFModule } from './dynload/on-the-fly/otf.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FRModule, LACModule, NMLModule, OTFModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
