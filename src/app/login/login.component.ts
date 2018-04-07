import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLogin() {
    this.router.navigate(['/dashboard']);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
