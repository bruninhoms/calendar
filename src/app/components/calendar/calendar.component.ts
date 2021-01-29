import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { DataService } from "src/app/services/data.service";
import type { Reminder } from "../../schemas/Reminder";

@Component({
  selector: "calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit, OnDestroy {
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
  public remindersArray: Array<Reminder>;
  public reminderNewDay: number;
  public reminderNewCity: string;
  public reminderNewStartTime: string;
  public reminderNewEndTime: string;
  public reminderNewDescription = "TESTE";
  public reminderNewColor = "blue";

  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(private dataService: DataService) {
    this.daysOfTheMonth = Array(31).fill(0);
  }

  ngOnInit(): void {
    this.dataService.getDayOfTheReminder().subscribe((_) => {
      _ ? (this.reminderNewDay = _) : 0;
    });
    this.dataService.getCityOfTheReminder().subscribe((_) => {
      _ ? (this.reminderNewCity = _) : 0;
    });
    this.dataService.getStartTimeOfTheReminder().subscribe((_) => {
      _ ? (this.reminderNewStartTime = _) : 0;
    });
    this.dataService.getEndTimeOfTheReminder().subscribe((_) => {
      _ ? (this.reminderNewEndTime = _) : 0;
      setTimeout(() => this.createReminder(), 50);
    });
  }

  private createReminder(): void {
    let newReminder: Reminder;

    newReminder = this.createEventObject();
    this.returnVariablesToInitialState();
    this.remindersArray.push(newReminder);
    // Put that into the template
  }

  private createEventObject(): Reminder {
    return {
      day: this.reminderNewDay,
      city: this.reminderNewCity,
      startTime: this.reminderNewStartTime,
      endTime: this.reminderNewEndTime,
      color: this.reminderNewColor,
      description: this.reminderNewDescription,
    };
  }

  private returnVariablesToInitialState(): void {
    this.reminderNewDay = 0;
    this.reminderNewCity = "";
    this.reminderNewStartTime = "";
    this.reminderNewEndTime = "";
    this.reminderNewColor = "blue";
    this.reminderNewColor = "TESTE";
  }

  public counter(i: number) {
    return new Array(i);
  }

  public createArrayCounterUp(i: number) {
    return Array.from({ length: i }, (_, i) => i + 1);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
  }
}
