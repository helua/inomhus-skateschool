import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstaService {

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<string>('https://ig.instant-tokens.com/users/f86040ae-5a59-4500-bc2e-1a636d0bfebe/instagram/17841408808851188/token?userSecret=vmdqrei0g2bwj2gwms1rn')
  };
  }
