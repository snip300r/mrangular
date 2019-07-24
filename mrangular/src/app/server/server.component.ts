import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
  })
export class ServerComponent implements OnInit {
  
  serverId:number = 7;
  serverStatus:string = "offline";

  constructor() {
    this.serverId = Math.random();
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

   getColor(){
     return this.serverStatus === 'online' ? 'green' : 'red';
   }
  ngOnInit() {
  }

}