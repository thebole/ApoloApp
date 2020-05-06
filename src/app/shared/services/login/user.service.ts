import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getAll(): Observable<User[]>{
  //   return this.http.get<User[]>(`/users`);
  // }

  // register(user: User): Observable<User>{
  //   return this.http.post<User>(`/users/register`, user);
  // }

  // delete(id: number): Observable<User> {
  //   return this.http.delete<User>(`/users/${id}`);
  // }
}
