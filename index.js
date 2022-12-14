////////////////////////////////////////////////////////
//
//  Lanawin Naptár Számláló v.1
//
//  `date` formátum = YYYY-M-D vagy YYYY.M.D
//
////////////////////////////////////////////////////////

const myInput = document.getElementById('myInput');
const myOutput = document.getElementById('myOutput');
const myClear = document.getElementById('myClear');


myClear.addEventListener('click',function() {
    myInput.value = '';
    myOutput.innerText = 'Kezdd el gépelni a dátumot...';
});

myInput.addEventListener('keyup', function() {
    myOutput.innerText = calendar(this.value);
});


function calendar(date) {

    //const lanaMonthDays = [35,35,29,29,30,30,32,24,31,31];
    // lanaDayYearDiff = 6
    //const lanaDayYearDiff = Math.round((365 - lanaMonthDays.reduce((p,c) => p+c,0)) / 10);
    // mennyi korrekcio van egy havonta es hany naponta van korrekcio
    //let correctionDays = [];
    //lanaMonthDays.forEach((v) => {correctionDays.push(Math.round((v/lanaDayYearDiff)))});

    let myDate;

    if (date.includes('-')) {
        myDate = date.split('-');
    } else if (date.includes('.')) {
        myDate = date.split('.');
    }

    
    const yearMsg = "Kérlek írj be 2013-nál nagyobb évszámot!";
    const monthMsg = "Kérlek adj meg 12 hónap vagy annál kevesebbet!";
    const dayMsg = "Kérlek adj meg 31 napnál kevesebbet!";

    let myYear = Number(myDate[0]);
    let myMonth = Number(myDate[1]);
    let myDay = Number(myDate[2]);

    if (myYear < 2013) {
        return yearMsg;
    }
    if (myDay > 31) {
        return dayMsg;
    }
    if (myMonth > 12) {
        return monthMsg;
    }
    
    const calendarInit = 6882; //6882.1 - 2013.december
    const lanaYear = calendarInit + (myYear - 2013);
    const lanaWeekLen = 6;
    const lanaDayNames = ["Myr", "Tarun", "Oren", "Willor", "Kelat", "Borquos"];
    const lanaMonthNames = ["1.Folyók hava","2.Tavak, tengerek hava","3.Fák, virágok hava","4.Mezők, rétek hava","5.A nap hava","6.A hold hava","7.A vulkánok hava","8.A perzselő homok hava","9.A színek hava","10.A levelek hava"];

    let lanaDay;
    let lanaMonth;
    let lanaDayName;
    let daySpeed;

    if (myYear == 2013 && myMonth < 12) {
        return lanaYear + ", de ennyire a múltba ne menjünk vissza...";
    }

    if (myMonth == 1 || myMonth == 12) {
        daySpeed = 1.15;
        let decimal = (myDay * daySpeed).toString().split('.')[1];
        if (myMonth == 12) {
            if (myDay > 0 && myDay < 32) {
                decimal > 50 ? lanaDay = Math.round(myDay*daySpeed) : lanaDay = Math.floor(myDay*daySpeed);
                //console.log(lanaDay);
            }
            lanaMonth = lanaMonthNames[0];
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[4];
                } else {
                    lanaDay == 8 || lanaDay == 20 || lanaDay == 26 || lanaDay == 32 ?
                        lanaDay = lanaDay - 1 : lanaDay = lanaDay;
                    i == 2 ? i = -4 : j % 6 == 0 ? i = -1 : i;
                    lanaDayName = lanaDayNames[4+i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        } else if (myMonth == 1) {
            //console.log(daySpeed);
            if (myDay > 0 && myDay < 32) {
                decimal > 50 ? lanaDay = Math.round(myDay*daySpeed) : lanaDay = Math.floor(myDay*daySpeed);
                console.log(lanaDay);
            }
            lanaMonth = lanaMonthNames[1];
            //console.log(lanaDay);
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[3];
                } else {
                    lanaDay == 8 || lanaDay == 20 || lanaDay == 26 || lanaDay == 32 ?
                        lanaDay = lanaDay - 1 : lanaDay = lanaDay;
                    i == 3 ? i = -3 : j % 6 == 0 ? i = -1 : i;
                    lanaDayName = lanaDayNames[3+i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        }
        
        return lanaYear+"."+lanaMonth+"."+lanaDay+"."+lanaDayName;
    } else if (myMonth == 2 || myMonth == 3) {
        if (myYear % 4 == 0 && myYear % 400 == 0) {
            daySpeed = 1;
        } else {
            daySpeed = (30 - (59/2));
        }
        //console.log(daySpeed);
        if (myMonth == 2) {
            if (!(myYear % 4 == 0) && myDay > 28) {
                return myYear + " nem volt szökőév!";
            } else if ((myYear % 4 == 0)) {
                lanaDay = myDay;
                //console.log("leapyear day",lanaDay);
            } else {
                lanaDay == 14 ? lanaDay = Math.floor(myDay-daySpeed) : lanaDay == 28 ? lanaDay = Math.floor(myDay-daySpeed) : lanaDay = myDay;
            }
            lanaMonth = lanaMonthNames[2];
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[2];
                } else {
                    i == 4 ? i = -2 : j % 6 == 0 ? i = -1 : i;
                    lanaDayName = lanaDayNames[2+i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        } else if (myMonth == 3) {
            if (myDay > 31) {
                return;
            } 
            lanaDay = myDay;
            lanaMonth = lanaMonthNames[3];
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[1];
                } else {
                    i == 5 ? i = -1 : i;
                    lanaDayName = lanaDayNames[1+i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        }
        return lanaYear+"."+lanaMonth+"."+lanaDay+"."+lanaDayName;
    } else if (myMonth == 4 || myMonth == 5) {
        if (myMonth == 4) {
            if (myDay > 30) {
                return;
            }
            lanaDay = myDay;
            lanaMonth = lanaMonthNames[4];
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[0];
                } else {
                    i == 6 ? i = 0 : i;
                    lanaDayName = lanaDayNames[i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        } else if (myMonth == 5) {
            if (myDay > 30) {
                return;
            }
            lanaDay = myDay;
            lanaMonth = lanaMonthNames[5];
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[0];
                } else {
                    i == 6 ? i = 0 : i;
                    lanaDayName = lanaDayNames[i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        }
        return lanaYear+"."+lanaMonth+"."+lanaDay+"."+lanaDayName; 
    } else if (myMonth >= 6 && myMonth <= 8) {
        daySpeed = 1.5;
        //console.log(daySpeed);
        if (myMonth == 6) {
            lanaDay = Math.round(myDay / daySpeed);
            lanaMonth = lanaMonthNames[6];
            if (lanaDay == 5 || lanaDay == 11 || lanaDay == 17 || lanaDay == 23 || lanaDay == 29) {
                lanaDay = lanaDay + 1;
            }
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[0];
                } else {
                    i == 6 ? i = 0 : i;
                    lanaDayName = lanaDayNames[i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        } else if (myMonth == 7) {
            lanaDay = Math.round(myDay / daySpeed) + 18;
            lanaMonth = lanaMonthNames[6];
            //console.log(lanaDay);
            if (lanaDay > 32 || lanaDay < 8) {
                lanaMonth = lanaMonthNames[7];
                lanaDay = Math.round(myDay / daySpeed) - 14;
                //console.log(lanaDay);
            }
            //console.log(lanaDay);
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[2];
                    //console.log(lanaDay);
                } 
                else if (lanaMonth == lanaMonthNames[7]){
                    i == 4 ? i = -2 : i;
                    lanaDayName = lanaDayNames[2+i];
                    //console.log(lanaDay);
                    //console.log(i+" - "+j+" - "+lanaDayName);
                } 
                else {
                    i == 6 ? i = 0 : i;
                    lanaDayName = lanaDayNames[i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        } else if (myMonth == 8) {
            lanaDay = Math.round(myDay / daySpeed) + 4;
            lanaMonth = lanaMonthNames[7];
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[2];
                } else {
                    i == 4 ? i = -2 : j % 6 == 0 ? i = -1 : i;
                    lanaDayName = lanaDayNames[2+i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        }
        return lanaYear+"."+lanaMonth+"."+lanaDay+"."+lanaDayName;
    } else if (myMonth >= 9 && myMonth <= 11) {
        daySpeed = ((30 - Math.round(62/3)) / lanaWeekLen);
        //console.log(daySpeed);
        if (myMonth == 9) {
            lanaDay = Math.round(myDay / daySpeed);
            lanaMonth = lanaMonthNames[8];
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[2];
                } else {
                    i == 4 ? i = -2 : j % 6 == 0 ? i = -1 : i;
                    lanaDayName = lanaDayNames[2+i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        } else if (myMonth == 10) {
            lanaDay = Math.round(myDay / daySpeed) + 20;
            lanaMonth = lanaMonthNames[8];
            if (lanaDay >= 31 || lanaDay <= 9) { //
                lanaMonth = lanaMonthNames[9];
                lanaDay = Math.round(myDay / daySpeed) - 12;
            }
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[3];
                } else {
                    i == 3 ? i = -3 : j % 6 == 0 ? i = -2 : i;
                    lanaDayName = lanaDayNames[3+i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        } else if (myMonth == 11) {
            lanaDay = Math.round(myDay / daySpeed) + 10; 
            if (lanaDay == 12 || lanaDay == 18 || lanaDay == 24 || lanaDay == 30) {
                lanaDay = lanaDay + 1;
            } else  {
                lanaDay = lanaDay - 1;
            }
            lanaMonth = lanaMonthNames[9];
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[3];
                } else {
                    i == 3 ? i = -3 : j % 6 == 0 ? i = -1 : i;
                    lanaDayName = lanaDayNames[3+i];
                    //console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        }
        return lanaYear+"."+lanaMonth+"."+lanaDay+"."+lanaDayName;
    }
}

// for (let i = 1; i < 29; i++) {
//     console.log(calendar(`2015-2-${i}`));
// }