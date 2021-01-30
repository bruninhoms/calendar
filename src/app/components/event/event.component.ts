import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import type { Reminder } from "src/app/schemas/Reminder";

@Component({
  selector: "event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"],
})
export class EventComponent implements OnInit {
  @Input() description = "";
  @Input() startTime = "";
  @Input() endTime = "";
  @Input() city = "";
  @Input() day = 0;
  @Input() _id = 0;
  @Input() color = "#e4f2f2";

  public newTime: string;
  public editMode = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.newTime = this.startTime + " to " + this.endTime;
  }

  public concludeEdition() {
    let arrayOfStrings: Array<string>;
    arrayOfStrings = this.newTime.split("to");
    this.startTime = arrayOfStrings[0].trim();
    this.endTime = arrayOfStrings[1].trim();

    this.dataService.getReminderUpdate().next(this.createReminderObject());

    this.editMode = false;
  }

  private createReminderObject(): Reminder {
    return {
      _id: this._id,
      day: this.day,
      color: this.color,
      city: this.city,
      description: this.description,
      endTime: this.endTime,
      startTime: this.startTime,
    };
  }
}
