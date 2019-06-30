import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/login/login.model';
import { LoginResponse } from 'src/app/login/loginresponsemoedl';
@Injectable()
export class LoginService {
    loginModel: LoginResponse
    constructor(private http: HttpClient) { }

    logIn(loginModel: LoginModel): Observable<any> {
        console.log(JSON.stringify(loginModel))
        console.log(loginModel)
        return this.http.post<Observable<any>>('http://localhost:3000/api/login', loginModel)
    }
    logout(user_id:any) {
        console.log(user_id)
        console.log(user_id)
        localStorage.removeItem('currentUser')
        //   return this.http.post<Observable<any>>('http://localhost:3000/api/login',loginModel)
    }
    getCurrentUser(): LoginResponse {
        this.loginModel = JSON.parse(localStorage.getItem('currentUser'))
        console.log(this.loginModel)
        return this.loginModel;
    }


}