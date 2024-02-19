import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('f') subscriptionForm : NgForm;
  defaultSubscription = 'advanced';
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    this.user.email = this.subscriptionForm.form.value.email;
    this.user.subscription = this.subscriptionForm.form.value.subscription;
    this.user.password = this.subscriptionForm.form.value.password;
    console.log(this.subscriptionForm);

    this.subscriptionForm.reset();
  }
}
