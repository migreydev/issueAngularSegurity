import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Main, User } from '../interface/auth';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private url ='http://localhost:3000/auth/login';
  private user : User = {name:'',email:'',login:'',role:'',state:false,uid:''};

  public get token(): string{
    return sessionStorage.getItem("token")||'';
  }

  login(email: string, password: string): Observable<Main> {
    return this.http.post<Main>(this.url, { email, password }).pipe(
      tap((response: Main) => {
        
        sessionStorage.setItem("token", response.token);
        this.router.navigate(['/']); 
      })
    );
  }

  logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    this.user = {name:'',email:'',login:'',role:'',state:false,uid:''};

    this.router.navigateByUrl("/");
  }

   // Devuelve true si hay un token de sesión, de lo contrario, devuelve false
  isLoggedIn(): boolean {
    return !!this.token;
  }
}
