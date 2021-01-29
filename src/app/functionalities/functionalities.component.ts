import { Component, OnInit } from "@angular/core";

@Component({
  selector: "functionalities",
  templateUrl: "./functionalities.component.html",
  styleUrls: ["./functionalities.component.scss"],
})
export class FunctionalitiesComponent implements OnInit {
  public showReminderOpt = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleReminderOptions(): void {
    this.showReminderOpt = !this.showReminderOpt;
  }
}
