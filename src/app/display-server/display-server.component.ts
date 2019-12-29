import { Component, OnInit,Input,ContentChild } from '@angular/core';

@Component({
  selector: 'app-display-server',
  templateUrl: './display-server.component.html',
  styleUrls: ['./display-server.component.css']
})
export class DisplayServerComponent implements OnInit {

  @Input() server;
  @ContentChild('panelDiv',{static : true}) panelDiv;
  constructor() { }

  ngOnInit() {
    console.log(this.panelDiv.nativeElement.textContent);
  }

}