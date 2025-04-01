import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ Ensures the service is available app-wide
})
export class ContactService {
  private apiUrl = 'https://myportfolio-etnx.onrender.com/contact_form'; // Your backend API URL

  constructor(private http: HttpClient) {}

  sendContactForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
