import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataComponent } from './data/data.component';
import { SchemeComponent } from './scheme/scheme.component';
import { ResultsComponent } from './results/results.component';
import { MenuServiceService } from '../menu-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataComponent,
    SchemeComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MenuServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
