import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userEmail: any;
  userPassword: string;
  userResetEmail: string;


  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {

    this.myForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit() {
  }

  onSubmit(form){

    

  }


  onLogin(){
    this.authService.login(this.userEmail, this.userPassword);
  }

register(){
    this.router.navigate(['admin/register']);
}

ForgotPassword(){
    this.authService.sendPasswordResetEmail(this.userResetEmail);
}

googlelogin(){
    this.authService.loginWithGoogle();
}
}
