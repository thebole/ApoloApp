import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  buildRegisterForm(): FormGroup {
    return this.registerForm = this.fb.group({
      fullName:['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.email]],
      tel: ['', [Validators.required]],
      password: ['',[Validators.required]]
    });
  }


  registerSubmit() {
    console.log(this.registerForm.value);
  }
}
