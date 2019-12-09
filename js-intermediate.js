// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//added zero because math

const getFib = () => {
			let fibArr = [0, 1, 1]
			for (var i = 2; i < 9; i++) {
				let i1 = fibArr.length -1
				let i2 = fibArr.length - 2
				let nextnum = fibArr[i1] + fibArr[i2]
				fibArr.push(nextnum)
			}
			return fibArr
}

// console.log(getFib());

const getFibPlus = (number) => {
			let fibArr = [0, 1, 1]
			for (var i = 2; i < number; i++) {
				let i1 = fibArr.length -1
				let i2 = fibArr.length - 2
				let nextnum = fibArr[i1] + fibArr[i2]
				fibArr.push(nextnum)
			}
			return fibArr
}

// console.log(getFibPlus(15));

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

const oddChecker = (array) => {
			let newArr = array.filter((v,i) => {
				if (typeof v === "number" && v % 2 !== 0) {
					return v
				}
			})
			return newArr
}
// Sanity checks
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
// console.log(oddChecker(fullArr1));

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]
// console.log(oddChecker(fullArr2));



// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
// console.log(bicycle.type)

// Log the bell:
// console.log(bicycle.gear[2])

// Log the PSI:
// console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

const reverseArray = (array) => {
			return array.reverse()
}

// Sanity checks
var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
// console.log(reverseArray(originalArray1));

var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]
// console.log(reverseArray(originalArray2));

var originalArray3 = [9 , 1, "t", "o", "r", "t", "x", "o", "f"]
// Expected output: ["e", "c", "h", "o", "1", "9"]
// console.log(reverseArray(originalArray3));

// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

const letterCounter = (string, letter) => {
			let count = 0
			for (var i = 0; i < string.length; i++) {
				string[i].toLowerCase() === letter ? count++ : count
			}
		return count
}

// Sanity Check
var ourString = "Hello Learn Students!"
// Expected output: 3
// console.log(letterCounter(ourString, "l"));

// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

const middleReturn = (string) => {
			let middleNum = Math.floor(string.length / 2)
			return string.length % 2 === 0 ?
			(string[middleNum-1] + string[middleNum]):
			string[middleNum]
}

// Sanity Check
var middleLetters1 = "hello"
// Expected output: “l”
// console.log(middleReturn(middleLetters1));

var middleLetters2 = "rhinoceros"
// Expected output: “oc”
// console.log(middleReturn(middleLetters2));

// 7. Write a program to get the area of a sphere using object classes.
// Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
class Sphere {
			constructor(diameter) {
				this.diameter = diameter;
				this.radius = diameter / 2;
				this.π = Math.PI;
				this.area = 4 * this.π * (this.radius ** 2);
			}
}

class Planet extends Sphere {
			constructor(diameter, romanName, sunIndex, period) {
				super(diameter)
				this.romanName = romanName;
				this.sunIndex = sunIndex;
				this.period = period;
			}
}

const testSphere = new Sphere(12)
const mercury = new Planet(3031.9, "Mercury", 1, 87.969)
const earth = new Planet(7917.5, "Terra", 3, 365.256)
const jupiter = new Planet(86881, "Jupiter", 5, 4332.59)

// Sanity Checks
// console.log(testSphere);
// console.log(mercury);
// console.log(earth.area);
// console.log(jupiter.sunIndex);

// 8. Use object destructuring to return the nested values of specs.
// Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

const returnSpecs = (myCar) => {
	let { specs } = myCar
	let { doors, transmission } = myCar.specs
	return `${doors}, ${transmission}`
}

// console.log(returnSpecs(myCar));



// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

const addArrayValues = (array) => {
			let newArr = []
					array.map((v,i) => {
					let x = (typeof newArr[i-1] === "number" ? newArr[i-1] : 0)
					let y = x + v
					newArr.push(y)
			})
			return newArr
}

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// Sanity Checks
// console.log(addArrayValues(numbersToAdd1));
// console.log(addArrayValues(numbersToAdd2));
// console.log(addArrayValues(numbersToAdd3));
