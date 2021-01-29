import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

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

  constructor() {}

  ngOnInit(): void {}

  public toggleReminderOptions(): void {
    this.showReminderOpt = !this.showReminderOpt;
  }

  onSubmit() {
    console.log("Dia ", this.form.value.day);
    console.log("cidade ", this.form.value.city);
    console.log("st ", this.form.value.startTime);
    console.log("et ", this.form.value.endTime);

    this.showReminderOpt = false;
  }
}
