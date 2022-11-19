//let hour = 0010

// hour between 0000 - 1159 = 'good morning'
// hour bewteen 1200 - 1759 = 'good afternoon'
// hour between 1800 - 2359 = 'good evening'
// hour greater 2359 or less than 0 
// = 'wrong time, please choose be 0000 and 2359

// nested if statement


function getHour(hour){
    let hour = 2289;
    if (hour >= 0000 && hour< 1200 ) {
        console.log('good morning');
        
    }else if (hour >= 1200 && hour < 1800) {
        console.log('good afternoon');
    }else if (hour >=1800 && hour <= 2359) {
             console.log('good evening');
    }else if(hour  > 2359 || hour < 0){
        console.log('wrong time, please choose between 0000 and 2359')
    }
    return hour
}



getHour();