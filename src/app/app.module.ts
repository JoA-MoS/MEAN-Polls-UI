import { PollsFilterPipe } from './shared/polls-filter.pipe';
import { PollsService } from './services/polls/polls.service';
import { FlashService } from './components/flash/flash.service';
import { UserService } from './services/user/user.service';
import { environment } from './../environments/environment';
import { RestApiServiceConfig } from './services/rest-api/rest-api-service-config';

// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Third Part Imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Application Imports
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './components/navigation/navigation.component';

import { FlashComponent } from './components/flash/flash.component';
import { FilterByTypePipe } from './components/flash/filter-by-type.pipe';
import { LoginComponent } from './components/login/login.component';
import { PollDetailsComponent } from './components/poll-details/poll-details.component';
import { PollCreateComponent } from './components/poll-create/poll-create.component';
import { PollListComponent } from './components/poll-list/poll-list.component';


@Injectable()
export class QuizAPIConfig extends RestApiServiceConfig {
  baseUrl = environment.apiUrl;
  idProperty = '_id';
}

@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent,
    PollsFilterPipe,
    NavigationComponent,
    FlashComponent,
    FilterByTypePipe,
    LoginComponent,
    PollDetailsComponent,
    PollCreateComponent,
    PollListComponent
  ],
  entryComponents: [ModalConfirmComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    UserService,
    FlashService,
    PollsService,
    { provide: RestApiServiceConfig, useClass: QuizAPIConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
