import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  formSignup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { validator: this.checkPasswords })

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  checkPasswords(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return true;
    } else {
      return { passwordNotMatch: true }
    }
  }
  onHandleSubmit() {
    if (this.formSignup.invalid) {
      return;
    }
    this.authService.signup(this.formSignup.value).subscribe(data => {
      console.log(data);
    })
  }
}
