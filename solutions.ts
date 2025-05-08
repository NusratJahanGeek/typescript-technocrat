// 1. Format string function
function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }
  
  // 2. Filter by rating
  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }
  
  // 3. Generic array concatenation
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  
  // 4. Vehicle and Car classes
  class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  
  // 5. Process string or number
  function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
  }
  
  // 6. Product interface and most expensive product finder
  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((prev, curr) => (curr.price > prev.price ? curr : prev));
  }
  
  // 7. Enum & weekday/weekend checker
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
  }
  
  // 8. Async square function
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
  
  // Sample test calls (You can remove or comment these before submission)
  console.log(formatString("hello World"));
  console.log(filterByRating([{ title: "Item1", rating: 3.5 }, { title: "Item2", rating: 4.2 }]));
  console.log(concatenateArrays([1, 2], [3, 4]));
  const car = new Car("Toyota", 2022, "Corolla");
  console.log(car.getInfo(), car.getModel());
  console.log(processValue("typescript"));
  console.log(processValue(7));
  console.log(getMostExpensiveProduct([{ name: "A", price: 100 }, { name: "B", price: 150 }]));
  console.log(getDayType(Day.Sunday));
  squareAsync(5).then(console.log).catch(console.error);
  