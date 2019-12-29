import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // name = 'Angular';

  
  serverElements = [
    {
      type : 'server',
      name : 'Test 1',
      content : 'Just Content'
    }
  ];

  onServerCreated(serverData : {type:string,name : string,content:string})
  {
    this.serverElements.push({
       type : 'server',
       name : serverData.name,
       content : serverData.content
    });
    console.log(this.serverElements);
  }

  // addServer(data : Event){
  //   this.serverElements.push({
  //     type : 'server',
  //     name : this.serverName,
  //     content : this.serverContent
  //   })
  // }

  addBlueprint(data:Event){
    this.serverElements.push({
      type : 'blueprint',
      name : this.serverName,
      content : this.serverContent
    })
  }

}
