import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { OnlyNumberDirective } from './only-number.directive';


@NgModule({
  declarations: [
    AppComponent,
    OnlyNumberDirective
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
