import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    if (!this.userService.loggedIn) {
      this.router.navigate(['login']);
    }
  }
  doLogout() {
    console.log('logging out');
    this.userService.logOut();
    this.router.navigateByUrl('');
  }

}
