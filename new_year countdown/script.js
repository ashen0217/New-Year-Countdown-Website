let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let daysLeft;
let cYear;
let daysPerYear
let daysinFeb;

var interval = window.setInterval(function(){
    var cDate = new Date();
    cDay = cDate.getDate();
    cHour = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();
    cMonth = cDate.getMonth() +1;
    cYear = cDate.getFullYear();
    

    if(cYear % 4 == 0){
        daysPerYear = 366;
        daysinFeb = 29;
    }
    else{
        daysPerYear = 365;
        daysinFeb = 28;
    }

    switch (cMonth) {
        case 1:
            daysLeft = daysPerYear;
            break;
        case 2:
            daysLeft = daysPerYear-31;
            break;
        case 3:
            daysLeft = daysPerYear-(31+daysinFeb); 
            break;     
        
        case 4:
            daysLeft = daysPerYear-(62+daysinFeb); 
            break;     
        
        case 5:
            daysLeft = daysPerYear-(92+daysinFeb); 
            break;     
        
        case 6:
            daysLeft = daysPerYear-(123+daysinFeb); 
            break;     
        
        case 7:
            daysLeft = daysPerYear-(153+daysinFeb); 
            break;     
        
        case 8:
            daysLeft = daysPerYear-(184+daysinFeb); 
            break;     
        
        case 9:
            daysLeft = daysPerYear-(215+daysinFeb); 
            break;     
        
        case 10:
            daysLeft = daysPerYear-(245+daysinFeb); 
            break;     
        
        case 11:
            daysLeft = daysPerYear-(276+daysinFeb); 
            break;     
        
        case 12:
            daysLeft = daysPerYear-(306+daysinFeb); 
            break;     

    }

    document.getElementById('seconds').innerHTML = 60-cSec;
    document.getElementById('minutes').innerHTML = 60-cMin;
    document.getElementById('hours').innerHTML = 60-cHour;
    document.getElementById('seconds').innerHTML = 60-cSec;
    document.getElementById('days').innerHTML = daysLeft-cDay;
    
},1000);

