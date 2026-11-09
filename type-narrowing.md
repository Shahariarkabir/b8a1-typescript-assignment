# Type Narrowing in TypeScript (and why I stopped fighting the compiler)

## Introduction

When I first used union types I kept hitting the same error. I had a parameter typed as `string | number` and I tried to call `.toUpperCase()` on it. TypeScript refused, because the value might be a number and numbers do not have that method. The fix was type narrowing. Narrowing means writing a small check in the code so that inside that block TypeScript knows exactly which type I am holding. After the check I get autocomplete and the compiler stops complaining. In this post I want to show the three checks I use the most.

## typeof for primitive values

`typeof` is the right tool for string, number and boolean.

```ts
const describe = (value: string | number): string => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return (value * 2).toString();
};
```

Inside the if block the value is a string, so `.toUpperCase()` is allowed. After the if, only number is left, so TypeScript lets me multiply.

## instanceof for class objects

When the union is made of classes I check which constructor created the object.

```ts
class Bike { ring(): string { return "ring ring"; } }
class Car { honk(): string { return "beep"; } }

const makeNoise = (vehicle: Bike | Car): string => {
  if (vehicle instanceof Bike) {
    return vehicle.ring();
  }
  return vehicle.honk();
};
```

## in for plain object shapes

For objects that are not classes I ask whether a property exists.

```ts
type Email = { address: string };
type Phone = { number: string };

const contact = (method: Email | Phone): string => {
  if ("address" in method) {
    return `Emailing ${method.address}`;
  }
  return `Calling ${method.number}`;
};
```

## Conclusion

Narrowing turned the compiler from an obstacle into a helper. I use `typeof` for primitives, `instanceof` for class instances and `in` for object shapes. Each one is a plain JavaScript check, but TypeScript reads it and tightens the type for me, which catches bugs before the code runs.
