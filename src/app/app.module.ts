import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { DisplayServerComponent } from './display-server/display-server.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CreateServerComponent, DisplayServerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
