import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenService } from '../../services/auth.service';
import { ShareDataService } from '../../services/share-data.service';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  submitted: boolean = true;
  constructor(private fb: FormBuilder,
     private router: Router,
     private authService: AuthenService,
     private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formLogin = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.submitted = false;
    this.authService.loginUser(this.formLogin.get('userName').value, this.formLogin.get('password').value)
    .subscribe((user) => {
      if (user) {
        this.router.navigate(['pages/dashboard']);
      }
      this.submitted = true;
    });
  }
}
