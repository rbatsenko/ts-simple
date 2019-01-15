/*
--- Exercise (Explicit Types)

let bankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
};

let myself = {
  name: 'Roman',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking'],
}

*/

type BankAccount = {
  money: number,
  deposit: (value: number) => void
}

type Person = {
  name: string,
  bankAccount: BankAccount,
  hobbies: string[],
}

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
};

let myself: Person = {
  name: 'Roman',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking'],
}

myself.bankAccount.deposit(3000);

console.log(myself);