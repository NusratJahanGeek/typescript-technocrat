# How TypeScript Improves Code Quality and Project Maintainability

TypeScript isn’t just a “nice to have” — it’s widely used for writing reliable, scalable code. Here's how it helps:

## ✅ Benefits of TypeScript

- **Early Bug Detection**  
  Type errors are caught during development, not after deployment.

- **Improved Readability**  
  Type annotations make the code self-documenting and easier for others to understand.

- **Safe Refactoring**  
  Rename functions or change types confidently — TypeScript will alert us to any breaking changes.

- **Enhanced IDE Support**  
  Features like IntelliSense, autocomplete, and inline documentation improve developer productivity.

- **Scalability for Large Projects**  
  Helps teams manage complex codebases with clear contracts and maintainable structures.

---

# Union and Intersection Types in TypeScript

## Union Types (`|`)

A union type allows a variable to be one of several types.

```ts
function formatValue(value: string | number): string {
  return typeof value === 'string' ? value.toUpperCase() : value.toFixed(2);
}

formatValue('hello'); // Output: "HELLO"
formatValue(12.345); // Output: "12.35"
```

Here, value can be a string or a number, and TypeScript ensures both are handled correctly.

## Intersection Types (`&`)

An intersection type combines multiple types into one, requiring all properties to be present.

```ts
type User = { name: string };
type Admin = { isAdmin: boolean };

type AdminUser = User & Admin;

const superUser: AdminUser = {
  name: 'Mr. X',
  isAdmin: true,
};
```

In this example, AdminUser must satisfy both User and Admin types — it's a merged type with all required properties.
