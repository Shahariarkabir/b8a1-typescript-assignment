# Type Narrowing in TypeScript

## Introduction

When a variable can be more than one type, for example `string | number`, TypeScript does not let us call string methods on it right away. It does not know yet which one we actually have. Type narrowing is the process of checking the value inside the code so TypeScript can "narrow" the wide union type down to one specific type. After the check, we get full autocomplete and safety for that type.

## Narrowing with typeof

The `typeof` operator works for primitive values like string, number and boolean.

```ts
const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  if (typeof input === "number") {
    return input * 10;
  }
  return input ? "Active" : "Inactive";
};
```

Inside the first `if`, TypeScript knows `input` is a string, so `.trim()` is allowed. In the last line only boolean is left, so no extra check is needed.

## Narrowing with instanceof

For class objects we use `instanceof`. It checks which class created the object.

```ts
const describe = (pet: Dog | Cat): string => {
  if (pet instanceof Dog) {
    return pet.bark();
  }
  return pet.meow();
};
```

## Narrowing with the in operator

When we have plain objects, `in` checks whether a property exists on the object.

```ts
type Car = { wheels: number };
type Boat = { sails: number };

const move = (vehicle: Car | Boat): string => {
  if ("wheels" in vehicle) {
    return `Driving on ${vehicle.wheels} wheels`;
  }
  return `Sailing with ${vehicle.sails} sails`;
};
```

## Conclusion

Type narrowing lets us write one function that safely handles many types. Use `typeof` for primitives, `instanceof` for class instances, and `in` for object shapes. Each check tells the compiler exactly what we are working with, so bugs are caught before the code ever runs.
