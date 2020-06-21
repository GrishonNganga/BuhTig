import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  http: HttpClient
  user: Object;
  constructor(private httpService: HttpClient) { 
    this.http = httpService
  }

   getUser(): Promise<Object>{
    const userPromise = new Promise((resolve, reject)=>{
      this.http.get(`${environment.endpoint}/users/grishonnganga`).subscribe((data)=>{
        resolve(data)
      },(err)=>{
        reject(err)
      })
    })
    
    return userPromise
    
  }
 
}
