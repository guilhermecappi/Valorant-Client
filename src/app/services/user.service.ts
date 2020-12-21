import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subject = new Subject();

  constructor() { }

  sendUser(user){
    this.subject.next(user);
  }

  receiveUser(): Observable<any>{
    return this.subject.asObservable();
  }
}
