import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  
  customers = [
    {
      Id:1,
      FirstName: 'Tanvir Ahmmed',
      LastName: 'Sifat',
      Email: 'sifatict26@gmail.com',
      PhoneNumber: '01521565259',
      City: 'Tangail',
      Country: 'Bangladesh',
    },
    {
      Id:2,
      FirstName: 'Sakib Ahmmed',
      LastName: 'Hasib',
      Email: 'sakibict26@gmail.com',
      PhoneNumber: '01521565259',
      City: 'Tangail',
      Country: 'Bangladesh',
    },
    {
      Id:3,
      FirstName: 'Tanvir Ahmmed',
      LastName: 'Sifat',
      Email: 'sifatict26@gmail.com',
      PhoneNumber: '01521565259',
      City: 'Tangail',
      Country: 'Bangladesh',
    },
  ];

}
