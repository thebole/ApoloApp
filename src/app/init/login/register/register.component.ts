import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/login/authentication.service';
import { UserService } from 'src/app/shared/services/login/user.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService) { 
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }
    }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

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

    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }
}
