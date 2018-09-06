import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(private http: HttpClient) { }

  private heroesUrl = 'http://demo4613730.mockable.io/test';  // URL to web api

  getAccountData(): Observable<any> {
    return this.http.get<any>(this.heroesUrl);
  }
}