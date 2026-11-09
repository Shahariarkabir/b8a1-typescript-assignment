# Access Modifiers in TypeScript OOP

## Introduction

A class holds data (properties) and behaviour (methods). Not every piece of data should be touched from everywhere in the program. Access modifiers are keywords that control who can read or change a property. TypeScript gives us four of them: `public`, `private`, `protected` and `readonly`. They help with encapsulation, which means protecting the internal state of an object and only changing it through methods we control.

## public

`public` is the default. Anything marked public can be used anywhere, inside the class, in child classes and from outside.

```ts
class Employee {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const emp = new Employee("Alice");
emp.name = "Bob"; // allowed
```

## private

`private` members can only be used inside the same class. Even a child class cannot see them.

```ts
class Employee {
  private baseSalary: number;
  constructor(baseSalary: number) {
    this.baseSalary = baseSalary;
  }
  getSalary(): number {
    return this.baseSalary; // fine here
  }
}
// emp.baseSalary  -> Error: Property 'baseSalary' is private
```

## protected

`protected` sits in the middle. It is hidden from the outside world but child classes that `extends` the parent can still use it.

```ts
class Employee {
  protected name: string = "Alice";
}
class Manager extends Employee {
  getRoleInfo(): string {
    return `Manager: ${this.name}`; // allowed because of protected
  }
}
```

## readonly

`readonly` is different. It is not about visibility but about mutation. The value can be set once, usually in the constructor, and never changed again.

```ts
class Employee {
  readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
}
// emp.id = 99 -> Error: Cannot assign to 'id' because it is a read-only property
```

## Conclusion

Use `public` for things the outside world needs, `private` for internal details, `protected` when child classes need access, and `readonly` for values that must never change. Together they make classes safer and easier to reason about.
