import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userEmail: any;
  password: any;
  constructor(private  authService:  AuthService,public router: Router) { }
  ngOnInit() {}

  onRegister(){
      this.authService.register(this.userEmail, this.password);
  }

  login(){
    this.router.navigate(['']);
  }
}
