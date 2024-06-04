import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  @Input() customers: any[] = [];
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
    console.log(customersInfo);
    this.customers.push(customersInfo);
  }
}
