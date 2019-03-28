import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectService } from './select.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectModule } from './select/select.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SelectModule
  ],
  providers: [
    SelectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
