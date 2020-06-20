import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDiv: boolean;

  constructor() {
    this.showDiv = false;
   }

  dropdownMenu(){
    this.showDiv = !this.showDiv
  }
  ngOnInit(): void {
  }

}
