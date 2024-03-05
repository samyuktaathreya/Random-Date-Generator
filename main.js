//declare variables
var date
var month
var year
var day
var monthsOf31 = [1,3,5,7,8,10,12]
var keyValues = [1,4,4,0,2,5,0,3,6,1,4,6]
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var weekday = 'Monday'
function randInt(low, high) {
    let random = Math.random()
    return Math.round((high - low) * random + low)
}
function getDay(month) {
    if (monthsOf31.includes(month)) {
        return(randInt(1,31))
    }
    else if (month == 2) {
        return(randInt(1,28))
    }
    else {
        return(randInt(1,30))
    }
}
function getDate() {
    document.getElementById('verify').innerHTML = ''
    month = randInt(1,12)   
    day = getDay(month)
    year = randInt(2021,2023)
    date = month + '/' + day + '/' + year
    weekday = getWeekDay(month,day,year)
    document.getElementById("date").innerHTML = date
}
function getWeekDay(month,day,year) {
    let returnSum
    //Take the last two digits of the year.
    let lastTwoDigits = year % 100
    //Divide by 4, discarding any fraction.
    let twoDigDiv4 = Math.floor(lastTwoDigits/4)
    //Add the day of the month.
    returnSum = twoDigDiv4 + day
    //Add the month's key value: JFM AMJ JAS OND 144 025 036 146
    returnSum += keyValues[month - 1]
    //Subtract 1 for January or February of a leap year.
    if (month <= 1 && year%4 == 0) {
        returnSum -= 1
    }
    //For a Gregorian date, add 0 for 1900's, 6 for 2000's, 4 for 1700's, 2 for 1800's; for other years, add or subtract multiples of 400.
    returnSum += 6
    //For a Julian date, add 1 for 1700's, and 1 for every additional century you go back.
    //Add the last two digits of the year.
    returnSum += lastTwoDigits
    //Divide by 7 and take the remainder.
    returnSum = (returnSum - 1)%7
    //find corresponding day of the week
    return(weekDays[returnSum])
}
function test() {
    document.write('hi')
}
function checkGuess() {
    const textInput = document.getElementById('guess');
    const answer = document.getElementById("verify")
    textInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const guess = textInput.value;
            //let guessString = toString(guess)
            //document.getElementById("verify").innerHTML = toString(guess==weekday)
            if (guess == weekday) {
                answer.innerHTML = 'correct';
                //document.getElementById('guess').value = ''
            }
            else if (answer.innerHTML != 'correct') {
                answer.innerHTML = 'wrong';
                //document.getElementById('guess').value = ''
            }
        textInput.value = '';
        }
    });
}
function resetEntry(){
    const textBox = document.getElementById('verify');
    const textInput = document.getElementById('guess');
    window.alert('hi')
    if (textBox.innerHTML != '') {
        //window.alert('hi')
        textInput.value = ''
        textBox.innerHTML = ''
    }
}

