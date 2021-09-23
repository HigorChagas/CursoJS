const data = document.querySelector('.container h1');

function showDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const weekDay = today.getDay();
    const year = today.getFullYear();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    
    let weekDayText = '';
    let monthText = '';


    switch(weekDay) {
        case 0:
            weekDayText = 'Sunday';
            break;
        case 1:
            weekDayText = 'Monday';
            break;
        case 2:
            weekDayText = 'Tuesday';
            break;
        case 3:
            weekDayText = 'Wednesday';
            break;
        case 4:
            weekDayText = 'Thursday';
            break;
        case 5:
            weekDayText = 'Friday';
            break;
        case 6:
            weekDayText = 'Saturday';
        default:
            weekDayText = 'Invalid Date';
            break;
    }

    
    switch(month) {
        case 1:
            monthText = 'January';
            break;
        case 2:
            monthText = 'February';
            break;
        case 3:
            monthText = 'March';
            break;
        case 4:
            monthText = 'April';
            break;
        case 5:
            monthText = 'May';
            break;
        case 6:
            monthText = 'June';
            break;
        case 7:
            monthText = 'July';
            break;
        case 8:
            monthText = 'August';
            break;
        case 9:
            monthText = 'September';
            break;
        case 10:
            monthText = 'October';
            break;
        case 11:
            monthText = 'November';
            break;
        case 12:
            monthText = 'December';
            break;
        default:
            weekDayText = 'Invalid Date';
            break;
    }
console.log(month);
    data.innerHTML = `${weekDayText}, ${day} of ${monthText} of ${year} ${hour}:${minutes}`
    
}

