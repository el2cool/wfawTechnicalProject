/*********************************
 * 
 * Service to talk to
 * fishrestapi.
 * 
 **********************************/

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Fish } from './fish';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json'
    })
  }

  getFishes(): Observable<Fish> {
    return this.http.get<Fish>(this.apiURL + '/fishes')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  getFish(id: any): Observable<Fish> {
    return this.http.get<Fish>(this.apiURL + '/fishes/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  
  createFish(fish: any): Observable<Fish> {
    return this.http.post<Fish>(this.apiURL + '/fishes/', JSON.stringify(fish), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  
  updateFish(id: any, fish: any): Observable<Fish> {
    return this.http.put<Fish>(this.apiURL + '/fishes/', JSON.stringify(fish), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteFish(id: number){
    return this.http.delete<Fish>(this.apiURL + '/fishes/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}


