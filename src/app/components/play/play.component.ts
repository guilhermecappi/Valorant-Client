import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  loggedOut: boolean;
  id: number;

  user: any = {
    name: null,
    password: null,
    id: null,
  }

  vlrLogo = "assets/images/vlr_logotype-tm.png"
  riotLogo = "assets/images/riot_logo.svg"
  playIcon = "assets/images/play_icon.svg"

  constructor(private loginService: LoginServiceService, private userService: UserService) {
    loginService.receiveLogin().subscribe(loginStats => this.loggedOut = loginStats)
    userService.receiveUser().subscribe(user => this.user = user);
   }

  ngOnInit(): void {}

  signOut(){
    this.user.name = null;
    this.user.password = null;
    this.userService.sendUser(this.user);

    this.loggedOut = !this.loggedOut;
    this.loginService.sendLogin(this.loggedOut);
  }

}
