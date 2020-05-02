import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/login/authentication.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) 
    { 
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
      }
    }

  ngOnInit() {
    this.buildLoginForm();
    
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  buildLoginForm(): FormGroup {
    return this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required , Validators.minLength(8)]]
    });

  }

  // convenience getter for easy access to form fields
  get fControls() { return this.loginForm.controls; }

  loginSubmit() {
    let values = this.loginForm.value;
    console.log(values);

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

        // stop here if form is invalid
        // if (this.loginForm.invalid) {
        //   return;
        // }

        this.loading = true;

        this.authenticationService.login(this.fControls.username.value , this.fControls.password.value).pipe(first()).subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          }
        );
  }
}
