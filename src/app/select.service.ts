import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http: HttpClient) { }

  getData() {
    // Get placeholder api. Just for now.
    return this.http.get('api/options');
  }
}