import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.component.scss']
})
export class RegisterComponent {
  email: string;
  password: string;
  repeatPassword: string;

  constructor(
    private authService: AuthService
  ) { }

  register() {
    const user = {
      email: this.email,
      password: this.password
    }

    this.authService.register(user).subscribe((res) => {
      console.log(res);
    })
  }
}
