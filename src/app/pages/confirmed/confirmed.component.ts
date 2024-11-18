import { Component } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent {
  quantity: number = 0; // You can replace this with actual data from a service

  constructor() {
    // Logic to get the quantity from your cart service
    this.quantity = this.getCartQuantity(); // Example function to get the quantity
  }

  getCartQuantity(): number {
    // Replace this with actual logic to fetch cart quantity
    return 5; // Sample value
  }
}

