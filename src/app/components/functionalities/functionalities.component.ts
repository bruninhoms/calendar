import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "functionalities",
  templateUrl: "./functionalities.component.html",
  styleUrls: ["./functionalities.component.scss"],
})
export class FunctionalitiesComponent implements OnInit {
  public showReminderOpt = false;

  form = new FormGroup({
    day: new FormControl("", Validators.max(31)),
    city: new FormControl("", Validators.required),
    startTime: new FormControl("", Validators.required),
    endTime: new FormControl("", Validators.required),
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  public toggleReminderOptions(): void {
    this.showReminderOpt = !this.showReminderOpt;
  }

  onSubmit() {
    if (
      !this.form.value.day ||
      !this.form.value.city ||
      !this.form.value.startTime ||
      !this.form.value.endTime
    )
      return;

    this.dataService.getDayOfTheReminder().next(this.form.value.day);
    this.dataService.getCityOfTheReminder().next(this.form.value.city);
    this.dataService.getEndTimeOfTheReminder().next(this.form.value.endTime);
    this.dataService
      .getStartTimeOfTheReminder()
      .next(this.form.value.startTime);

    this.showReminderOpt = false;
  }
}
