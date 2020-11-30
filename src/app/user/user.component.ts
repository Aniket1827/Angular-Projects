import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public firstname:string;
  public lastname:string;
  public username:string;
  public password:string;

  constructor() {
    this.firstname = "Virat";
    this.lastname = "Kohli";
    this.username = "virat18";
    this.password = "testing";
   }

  ngOnInit(): void {
  }

  deleteVariableValues()
  {
    this.firstname =this.lastname = this.username = this.password = "";
  }

}
