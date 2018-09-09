import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(private http: HttpClient) { }

  private heroesUrl = 'http://demo4613730.mockable.io/test';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAccountData(): Observable<any> {
    return this.http.get<any>(this.heroesUrl);
  }

  addAccountData(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.heroesUrl, data, this.httpOptions);
  }
}