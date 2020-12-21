import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vlr-client',
  templateUrl: './vlr-client.component.html',
  styleUrls: ['./vlr-client.component.css']
})
export class VlrClientComponent implements OnInit {
  @Input() clientOpened: boolean;
  @Output() closeClient = new EventEmitter;

  clientBg = "assets/images/vlr_client_wallpaper.png"

  configIcon = faCog;

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClient(){
    this.clientOpened = !this.clientOpened;
    this.closeClient.emit(this.clientOpened);
  }
}
