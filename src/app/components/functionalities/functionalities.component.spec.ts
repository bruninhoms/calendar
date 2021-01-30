import {
  TestBed,
  ComponentFixture,
  waitForAsync,
  fakeAsync,
  tick,
  inject,
  async,
} from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { of } from "rxjs";
import { ReactiveFormsModule } from "@angular/forms";
import { WeatherService } from "src/app/services/weather.service";
import { FunctionalitiesComponent } from "./functionalities.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { DataService } from "src/app/services/data.service";
import { Reminder } from "src/app/schemas/Reminder";

describe("FunctionalitiesComponent", () => {
  let component: FunctionalitiesComponent;
  let fixture: ComponentFixture<FunctionalitiesComponent>;
  let weatherService: WeatherService;
  let httpMock: HttpTestingController;
  let element;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FunctionalitiesComponent, CalendarComponent],
        imports: [ReactiveFormsModule, HttpClientTestingModule],
        providers: [
          { provide: DataService, useClass: DataService },
          { provide: WeatherService, useClass: WeatherService },
        ],
      }).compileComponents();

      weatherService = TestBed.inject(WeatherService);
      httpMock = TestBed.inject(HttpTestingController);
    })
  );

  beforeEach(inject([WeatherService], (s) => {
    weatherService = s;
    fixture = TestBed.createComponent(FunctionalitiesComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should create the fixture", () => {
    expect(fixture).toBeTruthy();
  });

  it("should create a new reminder using parameters: day, time (startTime and endTime), city, description and color", fakeAsync(() => {
    component.toggleReminderOptions();
    fixture.detectChanges();
    component.form.value.day = 2;
    component.form.value.startTime = "22:10";
    component.form.value.endTime = "23:02";
    component.form.value.city = "Miami";
    component.form.value.description = "UNIT TEST";
    component.form.value.color = "#b3b3b3";
    fixture.detectChanges();
    component.onSubmit();
    fixture.detectChanges();
    tick();
    fixture.whenStable().then(() => {
      weatherService.getClima().subscribe(() => {
        expect(component.cities.length).toBeGreaterThan(0);
        expect(component.showReminderOpt).toBeFalse();
        expect(component.color).toEqual("#b3b3b3");
      });
    });
  }));
});
