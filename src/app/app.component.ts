import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  products: Product[] = [];
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }
}
