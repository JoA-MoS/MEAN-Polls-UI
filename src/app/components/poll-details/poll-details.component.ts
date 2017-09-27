import { Option } from './../../models/option';
import { PollsService } from './../../services/polls/polls.service';
import { Poll } from './../../models/poll';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-poll-details',
  templateUrl: './poll-details.component.html',
  styleUrls: ['./poll-details.component.scss']
})
export class PollDetailsComponent implements OnInit {
  @Input() poll: Poll;
  constructor(private service: PollsService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getById$(params.get('id')))
      .subscribe(poll => {
        this.poll = poll;
      });
  }

  onVote(option: Option) {
    option.votes += 1;
    // need to create a route for just vote so we dont have to send the full path every time.\
    console.log(this.poll._id);
    this.service.update(this.poll._id, this.poll);
  }

  ngOnInit() {

  }

}
