import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { MaterialLoaderModule } from 'src/material-loader/material-loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CovalentLayoutModule,
    BrowserModule,
    MaterialLoaderModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
