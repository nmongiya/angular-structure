import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sim-pro-dg',
  templateUrl: './sim-pro-dg.component.html',
  styleUrls: ['./sim-pro-dg.component.css']
})
export class SimProDGComponent implements OnInit {

  @Input()  jobs;

  constructor() { }

  ngOnInit() {
  }

}
