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

// defines an empty array for all amount
let amountArray = []

// adds each amount to the array
for (let i = 0; i < data.length; i++){
  amountArray.push(data[i].amount)
}

// finds out the maximum number
let maximumAmount = Math.max(...amountArray)

// gets the content bar and sets its height
let contentBar = document.querySelector('.content-bar')
contentBar.style.height = `${maximumAmount * 3}px`

// sets different background for curent day
days[dayCurrentNo].classList.add('today')

for (let i = 0; i < noOfDaysDiv; i++){
  
  // gets the individual day
  let individualDay = data[i].day

  // gets the individual amount on individual day
  let individualAmount = data[i].amount

  // sets the height for individual div
  let heightOfIndividualDiv = ((100 / maximumAmount) * individualAmount)

  // sets a data-attribute and assignes a day value
  days[i].dataset.currentDay = individualDay
  days[i].dataset.title = `$${individualAmount}`

  // sets the height of the each div
  days[i].style.height = `${heightOfIndividualDiv}%`
}