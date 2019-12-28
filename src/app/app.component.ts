import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // name = 'Angular';

  serverName = '';
  serverContent = '';
  serverElements = [];

  addServer(data : Event){
    this.serverElements.push({
      type : 'server',
      name : this.serverName,
      content : this.serverContent
    })
  }

  addBlueprint(data:Event){
    this.serverElements.push({
      type : 'blueprint',
      name : this.serverName,
      content : this.serverContent
    })
  }

}
