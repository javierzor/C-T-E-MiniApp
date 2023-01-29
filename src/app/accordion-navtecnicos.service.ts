import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccordionNavtecnicosService {

  url = 'assets/multi-navtecnicos.json';

  constructor(private http: HttpClient) { }

  multiNavtecnicos() {
    return this.http.get(this.url);
  }
  
}