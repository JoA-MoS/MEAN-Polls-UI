import { FlashMessage } from './../flash/flash-message';
import { FlashService } from './../flash/flash.service';
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';
import { PollsService } from './../../services/polls/polls.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Poll, IPoll } from './../../models/poll';
import { Component, OnInit, Input } from '@angular/core';
import { FlashMessageTypes } from '../flash/flash-message-types.enum';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss']
})
export class PollCreateComponent implements OnInit {

  @Input() poll: Poll;
  pollForm: FormGroup;

  constructor(private fb: FormBuilder,
    private service: PollsService,
    private userService: UserService,
    private flashService: FlashService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): any {
    this.pollForm = this.fb.group({
      questionText: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      option1: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      option2: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      option3: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      option4: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    });
  }


  prepareSave(): Poll {
    const formModel = this.pollForm.value;

    const model = {
      _id: null,
      questionText: formModel.questionText as string,
      options: [{
        optionText: formModel.option1 as string,
      },
      {
        optionText: formModel.option2 as string,
      },
      {
        optionText: formModel.option3 as string,
      },
      {
        optionText: formModel.option4 as string,
      }],
      user: this.userService.userName
    };
    // console.log(saveQuestion);
    return model as Poll;
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.poll = this.prepareSave();
    this.service.create$(this.poll).subscribe(data => {
      this.flashService.addMessage(new FlashMessage(`${this.userService.userName}, your poll was created!`, FlashMessageTypes.success));
      this.router.navigate(['/']);
    });
  }

}
