import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {ResultComponent} from './components/result/result.component';
import {HomeComponent} from './components/home/home.component'
import { AuthGuard } from './auth/auth.guard';
import { SiginComponent } from './components/sigin/sigin.component';
import { SingupComponent } from './components/singup/singup.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path: 'quiz', component: QuizComponent , canActivate: [AuthGuard]},
  {path: 'result', component: ResultComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SiginComponent},
  {path: 'signup', component: SingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
