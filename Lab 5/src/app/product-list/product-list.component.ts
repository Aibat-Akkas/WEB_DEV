import { Component } from '@angular/core';

import { products } from '../products';
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  currentCategory = this.CategoryService.getCategory();

  setCategory(id: number) {
    this.CategoryService.setCategory(id);
    this.currentCategory = this.CategoryService.getCategory();
  }

  onDelete(id: number){
    products[id - 1].visibility = false;
  }

  onLike(id: number){
    products[id - 1].likes++;
  }

  share(pid: number) {
    const item = (products.find(item => item.id == pid));
    window.open(`https://t.me/share/url?url=${item?.link}&text=${item?.name}`);
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor(private CategoryService: CategoryService){}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/