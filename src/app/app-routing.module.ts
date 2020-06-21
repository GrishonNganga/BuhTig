import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'repositories', component: ReposComponent},
  {path: 'home/:search', component: UserComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
