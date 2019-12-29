import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display-server',
  templateUrl: './display-server.component.html',
  styleUrls: ['./display-server.component.css']
})
export class DisplayServerComponent implements OnInit {

  @Input() server;
  constructor() { }

  ngOnInit() {
  }

}