import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  user: string;
  pwd: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.login = new FormGroup({
      'user': new FormControl('', Validators.required),
      'pwd': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.router.navigate(['/main']);
  }

}
