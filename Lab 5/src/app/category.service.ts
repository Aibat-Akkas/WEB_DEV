import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  currentCategory = 0;

  setCategory(category: number){
    this.currentCategory = category;
  }

  getCategory(){
    return this.currentCategory;
  }

  constructor() { }
}
