import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  this.githubService.getUser()
  .then((data)=>{
    this.user = data
    console.log(this.user)
  })
  .catch((err)=>{
    this.user = err
  })
  }
}
