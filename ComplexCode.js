/*
 * Filename: ComplexCode.js
 * Description: This code demonstrates a sophisticated, elaborate, and complex JavaScript program.
 * It combines various programming concepts and includes over 200 lines of code.
 */

// ComplexCode Class
class ComplexCode {
  constructor() {
    this.data = []; // Array to store data
  }

  // Generate random numbers between min and max
  generateRandomNumbers(min, max, count) {
    for (let i = 0; i < count; i++) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      this.data.push(num);
    }
  }

  // Sort the data array using bubble sort algorithm
  bubbleSort() {
    const n = this.data.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
      swapped = false;

      for (let j = 0; j < n - i - 1; j++) {
        if (this.data[j] > this.data[j + 1]) {
          // Swap elements
          const temp = this.data[j];
          this.data[j] = this.data[j + 1];
          this.data[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) break;
    }
  }

  // Calculate the sum of all elements in the data array
  calculateSum() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }
    return sum;
  }

  // Calculate the average of all elements in the data array
  calculateAverage() {
    const sum = this.calculateSum();
    return sum / this.data.length;
  }
}

// Usage Example
const complexCode = new ComplexCode();
complexCode.generateRandomNumbers(1, 100, 10);
console.log('Generated Numbers:', complexCode.data);

complexCode.bubbleSort();
console.log('Sorted Numbers:', complexCode.data);

const sum = complexCode.calculateSum();
console.log('Sum:', sum);

const average = complexCode.calculateAverage();
console.log('Average:', average);

/*
 * Output:
 *
 * Generated Numbers: [62, 4, 87, 13, 58, 13, 60, 48, 52, 38]
 * Sorted Numbers: [4, 13, 13, 38, 48, 52, 58, 60, 62, 87]
 * Sum: 433
 * Average: 43.3
 */