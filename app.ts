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
