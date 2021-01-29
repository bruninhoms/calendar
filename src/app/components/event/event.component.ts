import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"],
})
export class EventComponent implements OnInit {
  @Input() description = "";
  @Input() startTime = "";
  @Input() endTime = "";

  constructor() {}

  ngOnInit(): void {}
}
