import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${username}`);
  }

  getRepositories(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/${username}/repos`);
  }
}
