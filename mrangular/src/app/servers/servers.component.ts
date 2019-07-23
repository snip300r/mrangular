import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  onClickdata:string = "";
  allowNewServer = false;
  serverCreated = false
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateserver() {
    return this.serverCreated = true;
    // return this.onClickdata = "Click";
  }

}
