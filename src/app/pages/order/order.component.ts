import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  templateUrl: './order.component.html',
  imports: [RouterLink,  ],
  styleUrls: ['./order.component.css']  // Note: should be 'styleUrls' not 'styleUrl'
})
export class OrderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.setupCardNumberInput();
    this.setupExpiryInput();
    this.setupCvvInput();
  }

  private setupCardNumberInput(): void {
    const cardNumberInput = document.getElementById('cardNumber') as HTMLInputElement;
    if (cardNumberInput) {
      cardNumberInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        let value = target.value.replace(/\D/g, '');
        if (value.length > 16) value = value.slice(0, 16);
        const parts = value.match(/.{1,4}/g) || [];
        target.value = parts.join(' ');
      });
    }
  }

  private setupExpiryInput(): void {
    const expiryInput = document.getElementById('expiry') as HTMLInputElement;
    if (expiryInput) {
      expiryInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        let value = target.value.replace(/\D/g, '');
        if (value.length > 4) value = value.slice(0, 4);
        if (value.length > 2) {
          value = value.slice(0, 2) + '/' + value.slice(2);
        }
        target.value = value;
      });
    }
  }

  private setupCvvInput(): void {
    const cvvInput = document.getElementById('cvv') as HTMLInputElement;
    if (cvvInput) {
      cvvInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement;
        let value = target.value.replace(/\D/g, '');
        if (value.length > 3) value = value.slice(0, 3);
        target.value = value;
      });
    }
  }
}

