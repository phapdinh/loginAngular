import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    this.auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        this.router.navigate(['admin']);
        this.auth.setLoggedIn(data.success);
      } else {
        window.alert(data.message);
      }
    });
    console.log('username', username, 'password', password);
  }
}
