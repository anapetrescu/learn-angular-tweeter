import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
    this.email = 'initail value';
  }

  login() {
    console.log(this.email, this.password);
    this.email = 'ceva';
  }
}
