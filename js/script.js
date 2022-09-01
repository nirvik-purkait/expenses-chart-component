//


// the data.json file data is inside an array and a variable 'data' is assigned
let data = [
  { "day": "sun", "amount": 25.48 },
  { "day": "mon", "amount": 17.45 },
  { "day": "tue", "amount": 34.91 },
  { "day": "wed", "amount": 52.36 },
  { "day": "thu", "amount": 31.07 },
  { "day": "fri", "amount": 23.39 },
  { "day": "sat", "amount": 43.28 }
]

// gets the div(s) in which is '.day' classname is assigned
let days = document.getElementsByClassName('day')

// returns how many div(s) are there as '.day' clssname, returns as a number
let noOfDaysDiv = days.length 

// returns the number of the day in number from 0 - 6
let dayCurrentNo = new Date().getDay() 

// accessing the day from given data, returns the day name as string
let theCurrentDay = data[dayCurrentNo].day

// accessing the ammount from given data, returns the ammount
let theAmmount = data[dayCurrentNo].amount


for (let i = 0; i < noOfDaysDiv; i++){

  let message = ''
  
  // gets the individual day
  let individualDay = data[i].day

  // gets the individual amount on individual day
  let individualAmount = data[i].amount

  let heightOfIndividualDiv = ((150 / 100) * individualAmount)
  
  // writes the name of each day inside the div
  days[i].innerHTML = message + individualDay
  
  // sets the height of the each div
  days[i].style.height = `${heightOfIndividualDiv}px`

}






















// console.log(data[3].amount);

// let date = new Date().getDay()

// console.log(date);


// const arr = [1, 2, 3];
// const max = Math.max(...arr);
// console.log(max);