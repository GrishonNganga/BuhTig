import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDiv: boolean
  searchTerm: string
  router: Router
  mySubscription: any;
  private url: string

  constructor(router: Router, private githubService: GithubService) {
    this.router = router
    this.showDiv = false
    this.githubService.setSearchedRepoTerm(undefined)

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        this.url = event.url
      }
    });
   }

  dropdownMenu(){
    this.showDiv = !this.showDiv
  }
  ngOnInit(): void {
  }

  searchGithub(form){    
    this.searchTerm = form.value.searchTerm
    form.resetForm()
    if(this.url == '/home'){
      console.log(this.searchTerm)
      this.githubService.setSearchedUserTerm(this.searchTerm)
      this.router.navigate(['/home'])
    }else{
      console.log(this.searchTerm)
      this.githubService.setSearchedRepoTerm(this.searchTerm)
      this.router.navigate(['/repositories'])
    }
        
  }
}
