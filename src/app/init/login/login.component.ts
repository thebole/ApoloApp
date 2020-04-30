import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildLoginForm();  
  }

  buildLoginForm(): FormGroup {
    return this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required , Validators.minLength(8)]]
    });

  }

  loginSubmit() {
    let values = this.loginForm.value;
    console.log(values);
  }

}
