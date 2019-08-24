import { Component , OnInit} from '@angular/core';
import { products } from '../books';

@Component({
  selector: 'app-product-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  products = products;
  //products: Product[];
  share() {
    window.alert('The product has been shared!');
  }

  constructor() {}
  ngOnInit(){    
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/