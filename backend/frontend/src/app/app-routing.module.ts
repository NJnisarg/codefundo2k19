import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'LOGIN'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
