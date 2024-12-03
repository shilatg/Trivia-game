import { makeAutoObservable } from "mobx";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item) {
    const existingItem = this.items.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }

  removeItem(itemName) {
    this.items = this.items.filter(cartItem => cartItem.name !== itemName);
  }

  decreaseQuantity(itemName) {
    this.items = this.items.map(cartItem =>
      cartItem.name === itemName
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ).filter(cartItem => cartItem.quantity > 0);
  }

  resetCart() {
    this.items = [];
  }
}

export const cartStore = new CartStore();
