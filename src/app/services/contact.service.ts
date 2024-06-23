import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private sendEmailUrl = '';

  constructor(private http: HttpClient) {}

  sendContactEmail(contactData: any): Observable<any> {
    return this.http.post(this.sendEmailUrl, contactData);
  }
}
