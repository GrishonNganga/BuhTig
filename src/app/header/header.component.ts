import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDiv: boolean
  searchTerm: any
  router: Router

  constructor(router: Router) {
    this.router = router
    this.showDiv = false
   }

  dropdownMenu(){
    this.showDiv = !this.showDiv
  }
  ngOnInit(): void {
  }

  searchGithub(form){    
    this.searchTerm = form.value.searchTerm
    form.resetForm()
    this.router.navigate(['/home', this.searchTerm])
        
  }
}
