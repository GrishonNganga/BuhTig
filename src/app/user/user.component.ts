import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  search: string;
  user: Object;

  constructor(private route: ActivatedRoute, private githubService: GithubService) { 
    this.search = this.route.snapshot.paramMap.get('search');
  }

  ngOnInit(): void {
    this.display()
  }
  async display(){
    try{
      this.user = await this.githubService.getSearchedUser(this.search)
      console.log(this.user)
    }catch(err){
      this.user = err
      console.log(this.user)
    }
    
  }
}
