import { FlashService } from './../flash/flash.service';
import { FlashMessage } from './../flash/flash-message';
import { UserService } from './../../services/user/user.service';
import { PollsService } from './../../services/polls/polls.service';
import { Observable } from 'rxjs/Observable';
import { Poll } from './../../models/poll';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { FlashMessageTypes } from '../flash/flash-message-types.enum';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {
  polls$: Observable<Poll[]>;
  searchTerm: string;
  user: string;

  constructor(private service: PollsService,
    private userService: UserService,
    private flashService: FlashService,
    private router: Router) {
    this.user = userService.userName;
  }

  ngOnInit() {
    this.polls$ = this.service.data$;
    this.service.loadAll();


  }

  onDelete(poll: Poll) {
    this.service.delete(poll._id);
    this.flashService.addMessage(new FlashMessage(`The "${poll.questionText}" poll was deleted`, FlashMessageTypes.info), true);
  }


}
