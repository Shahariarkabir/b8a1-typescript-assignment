# B8A1 - Problem Solving with TypeScript & OOP

This repository contains my solutions for Assignment 1 of the Next Level Web Development course (Batch 8). The assignment covers the TypeScript concepts taught in Modules 1 to 3: basic types, optional and rest parameters, readonly tuples, interfaces, type narrowing, generics, Promises and Object Oriented Programming.

## Files

| File | Description |
|------|-------------|
| `solutions.ts` | All 8 coding solutions in one file |
| `type-narrowing.md` | Blog 1: What is Type Narrowing in TypeScript |
| `access-modifiers.md` | Blog 2: Access Modifiers in TypeScript OOP |
| `tsconfig.json` | Compiler settings (same as the course setup) |

## Problems Solved

1. `multiplyValue` - optional parameter with a default behaviour
2. `processInput` - union types and `typeof` narrowing
3. `formatCoordinate` - readonly tuple parameter
4. `concatenateArrays` - generics with rest parameters
5. `Course` interface and `getPopularCourses` - filtering without mutation
6. `pluckValues` - generics with the `keyof` constraint
7. `Employee` and `Manager` classes - inheritance with `protected` and `private`
8. `validateAgeAsync` - Promise with `setTimeout` and `reject`

## Blog Posts

- [Type Narrowing in TypeScript](./type-narrowing.md)
- [Access Modifiers in TypeScript OOP](./access-modifiers.md)

## How to run

```bash
npm install -g typescript
tsc
```

This compiles `solutions.ts` into the `dist` folder using the settings in `tsconfig.json`.
