import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiUrl = 'https://api.github.com';
  private username!:string;
  constructor(private http: HttpClient) { }
  setUsername(username: string): void {
    this.username = username;
    console.log(this.username,"Github service");
  }
  getUsername(): string {
    return this.username;
  }
  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${username}`);
  }

  getRepositories(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/${username}/repos`);
  }
}
