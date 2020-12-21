import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private subject = new Subject();

  constructor() { }

  sendLogin(loggedin){
    this.subject.next(loggedin);
  }

  receiveLogin(): Observable<any>{
    return this.subject.asObservable();
  }

}
