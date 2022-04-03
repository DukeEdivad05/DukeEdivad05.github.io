var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var today = month + "/" + day + ".html";
var year = date.getFullYear();
var trentaG = [4, 6, 9, 11];
var months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]

function bisestile(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return (true)
            } else {
                return (false)
            }
        } else {
            return (true)
        }
    } else {
        return (false)
    }
}

function toTomorrow(day, month, year, trentaG) {
    if ((month == 2 && day == 28 && !bisestile(year)) || (month == 2 && day == 29 && bisestile(year)) || (month in trentaG && day == 30) || (day == 31)) {
        return ((month + 1) + "/" + 1 + ".html")
    } else {
        return (month + "/" + (day + 1) + ".html")
    }
}

function toTomorrowDay(day, month, year, trentaG) {
    if ((month == 2 && day == 28 && !bisestile(year)) || (month == 2 && day == 29 && bisestile(year)) || (month in trentaG && day == 30) || (day == 31)) {
        return ([1, month + 1]);
    } else {
        return ([day + 1, month])
    }
}

var tomorrowDay = toTomorrowDay(day, month, year, trentaG);
var tomorrow = toTomorrow(day, month, year, trentaG);
var afterTomorrow = toTomorrow(tomorrowDay[0], tomorrowDay[1], year, trentaG);
var afterTomorrowDay = toTomorrowDay(tomorrowDay[0], tomorrowDay[1], year, trentaG);
document.getElementById('today').setAttribute('include-html', today);
document.getElementById('todayName').innerHTML = day + " " + months[month - 1];
document.getElementById('tomorrow').setAttribute('include-html', tomorrow);
document.getElementById('tomorrowName').innerHTML = tomorrowDay[0] + " " + months[tomorrowDay[1] - 1];
document.getElementById('afterTomorrow').setAttribute('include-html', afterTomorrow);
document.getElementById('afterTomorrowName').innerHTML = afterTomorrowDay[0] + " " + months[afterTomorrowDay[1] - 1];