import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Person } from '../DTOs/PersonDTO';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = environment.apiUrl;
  private path = 'persons';
  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/${this.path}`);
  }
}
