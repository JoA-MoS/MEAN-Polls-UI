import { LoginComponent } from './components/login/login.component';
import { PollListComponent } from './components/poll-list/poll-list.component';

import { PollDetailsComponent } from './components/poll-details/poll-details.component';
import { PollCreateComponent } from './components/poll-create/poll-create.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [{
      path: '',
      redirectTo: 'polls',
      pathMatch: 'full'
    },
    {
      path: 'polls',
      component: PollListComponent
    },
    {
      path: 'polls/new',
      component: PollCreateComponent
    },
    {
      path: 'polls/:id',
      component: PollDetailsComponent
    }]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
