import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name:string,
  content:string}>();

  @Output() blueprintCreated = new EventEmitter<{name:string, content:string}>()

  constructor() { }

  ngOnInit() {
  }

  serverName = '';
  serverContent = '';
  
  addServer(data : Event){
    this.serverCreated.emit({
      name : this.serverName,
      content : this.serverContent
    })
  }

  addBlueprint(data : Event){
    this.blueprintCreated.emit({
      name : this.serverName,
      content : this.serverContent
    })
  }

}