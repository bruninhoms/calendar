import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import type { Reminder } from "../schemas/Reminder";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public reminder$ = new Subject<Reminder>();
  public reminderUpdate$ = new Subject<Reminder>();

  constructor() {}

  public getReminder(): Subject<Reminder> {
    return this.reminder$;
  }

  public getReminderUpdate(): Subject<Reminder> {
    return this.reminderUpdate$;
  }
}
