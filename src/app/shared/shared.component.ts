import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-shared",
  templateUrl: "./shared.component.html",
  styleUrls: ["./shared.component.scss"]
})
export class SharedComponent implements OnInit {
  @Input() module_name: string | undefined;
  constructor() {}

  ngOnInit() {}
}