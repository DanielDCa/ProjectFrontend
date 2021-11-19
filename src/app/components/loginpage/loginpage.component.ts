import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router : Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  goSignUp() 
  {
    this.router.navigate(['signUpPage']); 
  }

  loginForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]), 
    password: this.fb.control('', [Validators.required])
  })

}
