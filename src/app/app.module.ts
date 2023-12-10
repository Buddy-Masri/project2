import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppendPipe } from './pipes/append.pipe';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section6Component } from './section6/section6.component';


@NgModule({
  declarations: [
    AppComponent,
    AppendPipe,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section6Component,
  ],

  imports: [BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
