import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  onHandleSubmit() {
    if (this.formSignin.valid) {
      this.authService.signin(this.formSignin.value).subscribe(data => {
        localStorage.setItem('userInfo', JSON.stringify(data));
      })
    }
    console.log(this.formSignin.value);
  }
}
