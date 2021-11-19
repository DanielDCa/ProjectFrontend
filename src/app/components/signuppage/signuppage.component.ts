import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from './passwordValidator';
import {User} from './../../models/user'

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  signUpForm: FormGroup = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
    confirmationPassword: this.fb.control('', [Validators.required]),
  },
  {
    validators: passwordValidator,
  });

  passwordsMissmatch() {
     if(this.signUpForm.controls.password.value === this.signUpForm.controls.confirmationPassword.value) return false;
     return true;
  }
  onSubmit(){

    if (this.signUpForm.valid){
      let username = this.signUpForm.value.username;
      let email = this.signUpForm.value.email;
      let password = this.signUpForm.value.password;

      console.log(password + "   " + email + "  " +username);

      let usuario = new User(email,password,username,0);
      this.userService.addUser(usuario);
     
    }
   
   
  }

}
