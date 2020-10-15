const multiplier = {
  numbers: [2, 4, 6, 8, 10],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  },
};

console.log(multiplier.multiply());
