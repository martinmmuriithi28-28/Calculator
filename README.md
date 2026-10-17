#  JavaScript Calculator 

## 📌 Project Overview

The **JavaScript Calculator** is a simple command-line calculator application built to perform basic arithmetic operations while maintaining a record of all calculations performed.

This project simulates a basic operating system utility where users can perform calculations and review their previous operations through a stored history log.

The application was developed using JavaScript with a focus on clean code structure, reusable functions, and effective data management using arrays and objects.

---

## 🚀 Features

### Basic Arithmetic Operations
The calculator supports four fundamental mathematical operations:

- ➕ Addition
- ➖ Subtraction
- ✖️ Multiplication
- ➗ Division

---

### Calculation History Tracking

Every calculation performed is stored in a history array.

Each history record contains:

- The two numbers used in the calculation
- The mathematical operator
- The final result

Example:

```javascript
{
  operands: [10, 5],
  operator: "+",
  result: 15
}
