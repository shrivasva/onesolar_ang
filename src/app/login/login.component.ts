import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModel } from './login.model';
import { LoginService } from 'services/loginservice';
import { LoginResponse } from './loginresponsemoedl';
import { Router } from '@angular/router';
import { SignUpModel } from './signupmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginModel: LoginModel;
  signUpForm: FormGroup;
  signUpModel: SignUpModel;
  isSubmitted: boolean = false;
  signInForm: boolean = true;
  data: any;
  res: LoginResponse;
  err: any;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: new FormControl('contractor', Validators.required),
      pass: new FormControl('Asdf1234', Validators.required)
    })
  }
  login() {
    this.isSubmitted = true
    this.loginModel = new LoginModel();
    if (this.loginForm.invalid) {
      console.log(this.loginForm.controls.user.errors)
      return;
    }
    else {
      this.loginModel.user = this.loginForm.controls.user.value;
      this.loginModel.pass = this.loginForm.controls.pass.value;
      this.loginService.logIn(this.loginModel).subscribe(data => {
        this.res = new LoginResponse();
        this.res = JSON.parse(data);
        console.log(JSON.parse(data))
        console.log(this.res.login)
        if (this.res.login === true) {
          this.err = undefined
          this.res.role = 'Contractor'
          console.log('login successfull')
          localStorage.setItem('currentUser', JSON.stringify(this.res));
          this.router.navigate(['/dashboard']);

        }
        else {
          this.err = 'invalid creds'
          console.log('invalid creds')
        }

      })

    }
  }
  showForm(val: boolean) {
    if(val===false){
      this.signUpForm = this.formBuilder.group({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        mobile: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
      })
    }
    this.signInForm = val
    
  }
  signUp(){
    this.isSubmitted = true
    this.signUpModel = new SignUpModel();
    if (this.signUpForm.invalid) {
      console.log(this.signUpForm.controls)
      return;
    }
  }

}
