import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, skip, tap } from 'rxjs/operators';
import { Credentials } from './models/credentials';
import { User } from './models/user';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserModule } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly storageKey = 'user';
  private static readonly delay = 800;
  private userSubject: BehaviorSubject<User|null>;
  

  constructor() {
    const storedUser = JSON.parse(localStorage.getItem(UserService.storageKey) || 'null');
    this.userSubject = new BehaviorSubject<User|null>(storedUser);
    this.userSubject.pipe(
      skip(1), // skip first emission
      tap(user => localStorage.setItem(UserService.storageKey, JSON.stringify(user)))
    ).subscribe();
  }


  
  get f(){
    return this.form.controls;
  }
  

  get user(): User|null {
    return this.userSubject.value;
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email,Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    
  });
  get user$(): Observable<User|null> {
    return this.userSubject.asObservable();
  }

 
  login({ password, email}: Credentials): Observable<User> {
    let obs: Observable<User>;

    if (email === 'john@doe' && password === 'abcde' ){
      obs = of({
        id: '5fc62fdb5eb04def08ac913a',
        username: 'JohnDoe'
      });
    } else {
      obs = throwError(new Error('invalid credential'));
    }
    return obs.pipe(
      delay(UserService.delay), // simulate api
      tap(user => this.userSubject.next(user))
    );
  }

  logout(): Observable<boolean> {
    return of(true).pipe(
      delay(UserService.delay),
      tap(() => this.userSubject.next(null))
    );
  }
}
