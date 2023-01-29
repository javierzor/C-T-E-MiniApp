import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccordionNavService {

  url = 'assets/multi-nav.json';

  constructor(private http: HttpClient) { }

  multiNav() {
    return this.http.get(this.url);
  }
  
}