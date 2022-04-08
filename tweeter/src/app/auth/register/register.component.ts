import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.component.scss']
})
export class RegisterComponent {

  email: string;
  password: string;
  rept_password: string;
  constructor() { }
}
