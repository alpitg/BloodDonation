import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { EventsComponent } from './layout/events/events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Service } from './layout/home/service';
import { HomeComponent } from './layout/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    EventsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    DxDataGridModule,
    DxButtonModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
