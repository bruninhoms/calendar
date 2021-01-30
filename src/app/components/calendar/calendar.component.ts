import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
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
  public remindersArray: Array<Reminder> = [];
  public newReminder: Reminder;

  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(private dataService: DataService) {
    this.eventsBooleanArray = Array(31).fill(false);
  }

  ngOnInit(): void {
    this.dataService
      .getReminder()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((_) => {
        let newReminder: Reminder;
        _
          ? (newReminder = _)
          : console.log("Error: Reminder object not found.");

        this.createReminder(newReminder);
      });

    this.dataService
      .getReminderUpdate()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((_) => {
        let newEvent: Reminder;
        _ ? (newEvent = _) : console.log("Error: Day not found.");

        this.updateEvent(newEvent);
      });
  }

  private createReminder(newReminder: Reminder): void {
    this.remindersArray.push(this.createEventObject(newReminder));
    this.remindersArray.sort(this.sortByStartTime);
  }

  private updateEvent(newEvent: Reminder) {
    this.remindersArray = this.remindersArray.map((_) => {
      if (_._id === newEvent._id) {
        _ = newEvent;
        return _;
      } else return _;
    });
    this.remindersArray.sort(this.sortByStartTime);
  }

  private createEventObject(newReminder: Reminder): Reminder {
    return {
      _id: newReminder._id,
      day: newReminder.day,
      city: newReminder.city,
      startTime: newReminder.startTime,
      endTime: newReminder.endTime,
      color: newReminder.color,
      description: newReminder.description,
    };
  }

  private sortByStartTime(a: Reminder, b: Reminder) {
    if (a.startTime < b.startTime) {
      return -1;
    }
    if (a.startTime > b.startTime) {
      return 1;
    }
    return 0;
  }

  public counter(i: number) {
    return new Array(i);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
  }
}
