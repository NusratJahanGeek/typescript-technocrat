# 🧠 Understanding TypeScript Like a Pro

## 💥 Interfaces vs Types

In TypeScript, both `interface` and `type` are used to describe the shape of objects. But they’re not always the same.

- **Interfaces** can be extended and merged. Ideal for OOP and when dealing with classes.
- **Types** are more flexible. You can use union types, mapped types, etc.

```ts
interface User {
  name: string;
}
type Admin = User & { role: string };
```
