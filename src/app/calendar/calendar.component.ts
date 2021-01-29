import { Component, OnInit } from "@angular/core";

@Component({
  selector: "calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  public daysOfTheWeek: Array<string> = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  public eventsBooleanArray: Array<boolean>;
  public daysOfTheMonth: Array<number>;

  constructor() {
    this.daysOfTheMonth = Array(31).fill(1, 31);
    console.log(this.daysOfTheMonth);
  }

  ngOnInit(): void {}
}
