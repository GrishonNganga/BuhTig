import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  http: HttpClient
  user: Object;
  constructor(private httpService: HttpClient) { 
    this.http = httpService
  }

  getUser(user): Promise<Object>{
    const userPromise = new Promise((resolve, reject)=>{
      this.http.get(`${environment.endpoint}/users/${user}`).subscribe((data)=>{
        resolve(data)
      },(err)=>{
        reject(err)
      })
    })
    
    return userPromise
    
  }
  
  async getSearchedUser(searchTerm: string){
    let userPromise;
    const searchPromise = new Promise((resolve, reject)=>{
      this.http.get(`${environment.endpoint}/search/users?q=${searchTerm}`).subscribe((data)=>{
        let user: string = data['items'][0].url
        user = user.substr(29)
        resolve(user)
      }, (err)=>{
        reject(err)
      })
    })

    await searchPromise.then((user)=>{
      userPromise = this.getUser(user)
      .catch((err)=>{
        console.log(`${err} Something wrong happened searching for the user!`)
      })
    })
    return userPromise
  }
}
