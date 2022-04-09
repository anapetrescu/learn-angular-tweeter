import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(
        private httpClient: HttpClient
    ) {}

    login(user): Observable<any> {
        return this.httpClient.get("http://localhost:3000/users?email=" 
        + user.email + "&password=" + user.password);
    }

    register(user): Observable<any> {
        return this.httpClient.post("http://localhost:3000/users", user)
    }

}
