# Access Modifiers in TypeScript: public, private, protected and readonly

## Introduction

A class bundles data and the functions that work on that data. The problem is that by default every property is open, so any part of the program can reach in and change it. In a bank account class that would mean anyone could set the balance to a million. Access modifiers are the keywords that decide who is allowed to see or change a property. TypeScript has four of them and I will go through each with a small example built around a `BankAccount` class.

## public

If I write nothing, or write `public`, the member is reachable from anywhere.

```ts
class BankAccount {
  public owner: string;
  constructor(owner: string) {
    this.owner = owner;
  }
}
const acc = new BankAccount("Sadia");
acc.owner = "Someone else"; // allowed, maybe not wise
```

## private

`private` locks the member inside the class. Not even a child class can touch it.

```ts
class BankAccount {
  private balance: number = 0;
  deposit(amount: number): void {
    this.balance = this.balance + amount;
  }
}
// acc.balance = 1000000; -> compile error, balance is private
```

Now the only way in is through `deposit`, where I can add checks.

## protected

`protected` is hidden from the outside but open to subclasses. This is handy for inheritance.

```ts
class BankAccount {
  protected accountNumber: string = "AC-001";
}
class SavingsAccount extends BankAccount {
  getLabel(): string {
    return `Savings ${this.accountNumber}`; // allowed in a child
  }
}
```

## readonly

`readonly` is about mutation rather than visibility. The value is set once and then frozen.

```ts
class BankAccount {
  readonly createdAt: Date;
  constructor() {
    this.createdAt = new Date();
  }
}
// acc.createdAt = new Date(); -> compile error
```

## Conclusion

My rule of thumb is simple. Start everything as `private`, open it to `protected` only when a subclass really needs it, make it `public` only when outside code must use it, and add `readonly` to anything that should never change after construction. The compiler then enforces those decisions for me.
