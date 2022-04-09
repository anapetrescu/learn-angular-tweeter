import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.component.scss']
})
export class LoginComponent implements OnInit{
  email: string;
  password: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    const user = {
      email: this.email,
      password: this.password
    }

    this.authService.login(user).subscribe((resp) => {
      console.log(resp)
    })
  }

}
