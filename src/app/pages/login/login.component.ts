import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

public usernameForm = new FormControl(null, [Validators.required, Validators.email]);
public passwordForm = new FormControl(null, [Validators.minLength(4)]);
public userForm! : FormGroup;

constructor() { }

ngOnInit(): void {
  this.userForm = new FormGroup({
    username: this.usernameForm,
    password: this.passwordForm
  })
}

submit() {
  console.log(this.userForm.value);
}

}
