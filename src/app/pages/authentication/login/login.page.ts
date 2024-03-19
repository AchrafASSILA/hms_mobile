import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  screen: any = 'signin';
  loginFormGroup: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  forgotPasswordFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  isLoading: boolean = false;
  isToastOpen: boolean = false;
  toastMessage = 'Welcome to HMSI';
  constructor() {}

  ngOnInit() {}
  change(event: any) {
    this.screen = event;
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  login() {
    // var request: Authenticationrequest = new Authenticationrequest(
    //   this.loginFormGroup.get('username')?.value,
    //   this.loginFormGroup.get('password')?.value
    // );
    // if (this.loginFormGroup.valid) {
    //   this.authenticationService.userLogin(request).then(() => {
    //     if (this.authenticationService.isAuthenticated()) {
    //       this.authenticationService.redirectTo('/tabs/dashboard');
    //     }
    //   });
    // }
  }
}
