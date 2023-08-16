import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  
  public emailUrl = 'http://localhost:3000/sendmail.php';
  

  constructor(private http: HttpClient) { }
 
  sendEmail(data: any) {
    console.log(data);
    return this.http.post(this.emailUrl, JSON.stringify(data), {responseType: 'text'});
  }}
