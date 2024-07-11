import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilhoComponent } from './filho/filho.component';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { HighlightDirective } from './highlight.directive';
import { StyleDirective } from './style.directive';
import { ClassDirective } from './class.directive';
import { ListenerDirective } from './listener.directive';
import { InputBackgroundDirective } from './input-background.directive';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { FocusSecondInputDirectiveDirective } from './focus-second-input-directive.directive';
import { XssComponent } from './xss/xss.component';

@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    DiretivaComponent,
    HighlightDirective,
    StyleDirective,
    ClassDirective,
    ListenerDirective,
    InputBackgroundDirective,
    ElementRefComponent,
    FocusSecondInputDirectiveDirective,
    XssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
