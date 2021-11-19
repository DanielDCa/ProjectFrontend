import { MatFormFieldModule } from '@angular/material/form-field';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path: 'loginPage', component: LoginpageComponent},
  {path: 'signUpPage', component: SignuppageComponent},
  {path: 'service/:id', component: ServiceListComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
