import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


  @Input() producto:Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: ''

  }
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();


  constructor() { }


  onAddToCart(){
    this.addedProduct.emit(this.producto);
  }

  onShowDetail(){
    this.showProduct.emit(this.producto.id);
  }
}
