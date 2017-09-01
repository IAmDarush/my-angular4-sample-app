import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;

  constructor() { }

  ngOnInit() {

    this.name  = 'John Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Write code', 'Watch Movies', 'Listen to music'];
    this.hello = 1;
  }

  onClick() {
    this.name = 'Darush';
    this.hobbies.push('New Hobby');
  }

}

interface  Address {
  street: string;
  city: string;
  state: string;
}