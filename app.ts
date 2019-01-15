//string
let myName: string = 'Roman';

//number
let myRealAge: number;
//myRealAge = '24';
myRealAge = 24;

//array
let hobbies: any[] = ['Web Development', 'Climbing'];
hobbies = [100];
//hobbies = 100;

//tuples
let address: [string, number] = ['Superstreet', 99];

//enums
enum Color {
  Grey, // 0
  Green = 100, // 1
  Blue = 2// 2
}

let myColor: Color = Color.Green;
console.log(myColor);

//any
let car: any = 'BMW';
console.log(car);

//function
function returnMyName(): string {
  return myName;
}

console.log(returnMyName());

//void
function sayHello(): void {
  console.log('Hello!');
}

//argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

//function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
myMultiply(5, 2);

//objects
let userData: { name: string, age: number } = {
  name: 'Roman',
  age: 24
};

//complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],
  output: (all: boolean) => this.data
}

//type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [1],
  output: (all: boolean) => this.data
}

//union types
let myRealRealAge: number | string = 24;
myRealRealAge = '24';
//myRealRealAge = true;