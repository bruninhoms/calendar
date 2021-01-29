import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public day$ = new Subject<number>();
  public city$ = new Subject<string>();
  public startTime$ = new Subject<string>();
  public endTime$ = new Subject<string>();

  constructor() {}

  public getDayOfTheReminder(): Subject<number> {
    return this.day$;
  }

  public getCityOfTheReminder(): Subject<string> {
    return this.city$;
  }

  public getStartTimeOfTheReminder(): Subject<string> {
    return this.startTime$;
  }

  public getEndTimeOfTheReminder(): Subject<string> {
    return this.endTime$;
  }
}
