import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/services/data.service";
import { WeatherService } from "src/app/services/weather.service";
import type { Reminder } from "src/app/schemas/Reminder";

@Component({
  selector: "functionalities",
  templateUrl: "./functionalities.component.html",
  styleUrls: ["./functionalities.component.scss"],
})
export class FunctionalitiesComponent implements OnInit {
  public showReminderOpt = false;
  public color: string;
  public mainTemps: Array<number> = [];
  public cities: Array<string> = [];

  form = new FormGroup({
    day: new FormControl("", Validators.max(31)),
    city: new FormControl("", Validators.required),
    startTime: new FormControl("", Validators.required),
    endTime: new FormControl("", Validators.required),
    description: new FormControl("", Validators.maxLength(30)),
  });

  constructor(
    private dataService: DataService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.weatherService.getClima().subscribe((_) => {
      this.cities.push(_.name);
      this.mainTemps.push(_.main.temp);
    });
  }

  public toggleReminderOptions(): void {
    this.showReminderOpt = !this.showReminderOpt;
  }

  private createReminderObject(): Reminder {
    return {
      _id: Math.floor(Math.random() * 100),
      day: this.form.value.day,
      color: this.color,
      city: this.form.value.city,
      description: this.form.value.description,
      endTime: this.form.value.endTime,
      startTime: this.form.value.startTime,
    };
  }

  onSubmit() {
    if (
      !this.form.value.day ||
      !this.form.value.city ||
      !this.form.value.startTime ||
      !this.form.value.description ||
      !this.form.value.endTime ||
      !this.color
    )
      return;

    this.dataService.getReminder().next(this.createReminderObject());
    this.weatherService.getApiInfo(this.form.value.city.trim() + ",us");

    this.showReminderOpt = false;
  }
}
