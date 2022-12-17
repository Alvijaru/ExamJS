/* ------------------------------ TASK 3 ---------------------------------------------------
Sutvarkykite užduoties "Task 3" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

import * as numbers from "/modules/numbers/numbers.js";
import {composition} from "/modules/math/composition.js";
console.log(composition(numbers.one, numbers.four));

import {division} from "/modules/math/division.js";
console.log(division(numbers.four, numbers.two));

import {substraction} from "/modules/math/subtraction.js";
console.log(substraction(numbers.three, numbers.two));

import {multiplication} from "/modules/math/multiplication.js";
console.log(multiplication(numbers.five, numbers.two));
