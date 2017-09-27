import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
    if (this.userService.loggedIn) {
      this.router.navigate(['polls']);
    } else {
      this.createForm();
    }
  }

  ngOnInit() {
  }

  createForm(): any {
    this.loginForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });
  }

  onSubmit() {
    const userName = this.loginForm.value.userName;
    this.userService.logIn(userName);
    this.router.navigate(['polls']);
  }


}
