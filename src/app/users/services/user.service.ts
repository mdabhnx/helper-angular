import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  BASE_URL: string = 'https://jsonplaceholder.typicode.com/';

  listUsers() {
    return this.http.get(this.BASE_URL + 'users').pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }

  viewUser(id: string) {
    return this.http.get(this.BASE_URL + 'users/' + id).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }

  addUser(userPayload: any) {
    return this.http.post(this.BASE_URL + 'users/', userPayload).pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
}
