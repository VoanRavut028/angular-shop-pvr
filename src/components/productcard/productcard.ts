import { Component, input, output } from '@angular/core';
import { ProductVM } from '../product-grid/productVM';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productcard',
  imports: [MatButton, CommonModule],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css',
})
export class Productcard {
  product = input.required<ProductVM>();
  addToCartClicked = output<ProductVM>();
}
