import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"; //Módulo para peticines AJAX
import { FormsModule } from '@angular/forms';

//Formato de fechas y hora Chile
import { LOCALE_ID } from '@angular/core';
// FECHAS EN FORMATO ES
import localeEsCl from "@angular/common/locales/es-CL";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEsCl, 'es-CL');


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { StoriesComponent } from './components/stories/stories.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    StoriesComponent,
    DetailComponent,
    EditComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
