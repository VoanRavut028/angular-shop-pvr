import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';

import ProductGrid from '../../../product-grid/product-grid';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [MatButton, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
