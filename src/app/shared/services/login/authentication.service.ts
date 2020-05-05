import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  private apiKey: string = 'AIzaSyA6efzVBDcWSKS75BoinJEv62_Bi0OvLEw';
  // URL para usuarios en fireBase
  private url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  userToken: string;
  email: string;


  constructor(private http: HttpClient,
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User){
    const authData = {
      ...user,
      returnSecureToken: true
    }
    return this.http.post(`${this.url}signInWithPassword?key=${this.apiKey}`,authData
    ).pipe(
      map( resp => {
        this.saveToken(resp['idToken'],resp['email'], resp);
        return resp;
      })
    );
  }


  register(user: User){
    const authData = {
      ...user,
      returnSecureToken: true
    }
    return this.http.post(
    `${this.url}signUp?key=${this.apiKey}`,authData
    ).pipe(
      map( resp => {
        this.saveToken(resp['idToken'], resp['email'], resp);
        return resp;
      })
    );;
  }

    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('expire');
      localStorage.clear();
      this.currentUserSubject.next(null);
  }

    private saveToken(idToken: string, email: string, user?) {
      this.userToken = idToken;
      this.email = email;

      localStorage.setItem('token', idToken);
      localStorage.setItem('email', email);
      
      let today = new Date();
      today.setSeconds( 3600 );

      localStorage.setItem('expire' , today.getTime().toString());

      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }


    // read the token
    readToken(){
      if (localStorage.getItem('token')) {
        this.userToken = localStorage.getItem('token');
      } else {
        this.userToken = '';
      }
  
      return this.userToken;
    }

    // Authenticated with Fire Base
    isAuthenticated() : boolean {
      if (this.userToken.length < 3) {
        return false;
      } 
       const exp = Number(localStorage.getItem('expire'));
       const todayExp = new Date();
  
       todayExp.setTime(exp);
  
      if ( todayExp > new Date()) {
        return true;
      } else {
        return false;
      }
    }
}
