import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  vlrLogo = "assets/images/vlr_logo.svg";
  
  infoOpened: boolean = false;
  loggedOut: boolean = true;

  questionIcon = faQuestionCircle;
  facebookIcon = faFacebook;
  googleIcon = faGoogle;
  appleIcon = faApple;
  eyeIcon = faEye;
  eyeSlashIcon = faEyeSlash;
  
  user: any = {
    name: null,
    password: null,
    id: null,
  }
  constructor(private loginService: LoginServiceService, private userService: UserService) { 
    loginService.receiveLogin().subscribe(loginStats => this.loggedOut = loginStats);
    userService.receiveUser().subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

  showInfo(){
    this.infoOpened = !this.infoOpened;
  }

  signIn(){
    this.randomId();
    this.userService.sendUser(this.user);

    this.loggedOut = !this.loggedOut;
    this.loginService.sendLogin(this.loggedOut);
  }

  showPassword(password){
    if(password.type == "text"){
      password.type = "password"
    }
    else if(password.type == "password"){
      password.type = "text"
    }
  }

  randomId(){
    let min = Math.ceil(1000)
    let max = Math.floor(9999);
    this.user.id =  Math.floor(Math.random() * (max - min)) + min;
  }
}
