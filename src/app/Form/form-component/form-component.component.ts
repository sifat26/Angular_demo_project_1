import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
})
export class FormComponentComponent {
  @Input() customers: any[] = [];

  customerForm = new FormGroup({
    FirstName: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ])
    ),
    LastName: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(9),
      ])
    ),
    Email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    PhoneNumber: new FormControl('', [
      Validators.required
    ]),
    City: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
  });
  onSubmit(e: any) {
    e.preventDefault();
    const form = e.target;
    const FirstName = form.FirstName.value;
    const LastName = form.LastName.value;
    const Email = form.email.value;
    const PhoneNumber = form.phoneNumber.value;
    const City = form.City.value;
    const Country = form.Country.value;
    console.log(FirstName, LastName, Email, PhoneNumber, City, Country);
    const customersInfo = {
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      City,
      Country,
    };
    if (this.customerForm.valid) {
      this.customers.push(this.customerForm.value);
      this.customerForm.reset();
    } else {
      this.customerForm.markAllAsTouched();
    }
  }
  formFill() {
    console.log(this.customerForm.value, this.customerForm);
  }
}
