import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ColorPickerModule } from "ngx-color-picker";

import { AppComponent } from "./app.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { FunctionalitiesComponent } from "./components/functionalities/functionalities.component";
import { EventComponent } from "./components/event/event.component";

import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FunctionalitiesComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
