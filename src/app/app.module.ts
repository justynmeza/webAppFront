import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFountComponent } from './shared/not-fount/not-fount.component';
import { TemplateComponent } from './thema/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFountComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
