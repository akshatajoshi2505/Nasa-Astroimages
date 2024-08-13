import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IGrocery {
  name: string;
  quantity: number;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  groceryList: IGrocery[] = [
    {
      name: 'Apples',
      quantity: 2,
      id: 1,
    },
    {
      name: 'Eggs',
      quantity: 4,
      id: 2,
    },
    {
      name: 'Oranges',
      quantity: 3,
      id: 3,
    },
    {
      name: 'Cucumber',
      quantity: 2,
      id: 4,
    },
  ];
  constructor() {}

  getGrocery() {
    return this.groceryList;
  }

  addGrocery(name: string, quantity: number) {
    this.groceryList.push({
      name: name,
      quantity: quantity,
      id: Math.floor(Math.random() * 1000),
    });

    return this.groceryList;
  }

  handleQuantityChange(id: number, data: number) {
    this.groceryList = this.groceryList.map((g) =>
      g.id === id
        ? {
            ...g,
            quantity:
              data > 0
                ? g.quantity + data
                : g.quantity > 0
                ? g.quantity + data
                : 0,
          }
        : g
    );
    return this.groceryList;
  }

  getTotal() {
    this.groceryList.length;
  }
  handleDelete(id: Number) {
    this.groceryList = this.groceryList.filter((g) => g.id !== id);
    return this.groceryList;
  }
}
