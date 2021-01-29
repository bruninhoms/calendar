import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { FunctionalitiesComponent } from "./functionalities/functionalities.component";
import { EventComponent } from "./event/event.component";

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
