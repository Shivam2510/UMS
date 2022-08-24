import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EventComponent } from './event/event.component';
import { LibrarySeatComponent } from './library-seat/library-seat.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'passwordchange', component: ChangePasswordComponent},
  {path: 'event', component:EventComponent},
  {path: 'library-seat', component:LibrarySeatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
