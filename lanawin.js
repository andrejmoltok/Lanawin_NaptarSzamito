// date formátum = YYYY-M-D vagy YYYY.M.D

function calendar(date) {

    let myDate;

    if (date.includes('-')) {
        myDate = date.split('-');
    } else if (date.includes('.')) {
        myDate = date.split('.');
    }

    let myYear = myDate[0] - 1;
    let myMonth = myDate[1];
    let myDay = myDate[2];
    
    const calendarInit = 6882; //6882.1 - 2013.december
    const lanawinYear = calendarInit + (myYear - 2013);

    const lanawinWeekLen = 6;
    const lanawinDayNames = ["Myr", "Tarun", "Oren", "Willor", "Kelat", "Borquos"];
    const lanawinMonthNames = ["1. Folyók hava","2. Tavak, tengerek hava","3. Fák, virágok hava","4. Mezők, rétek hava","5. A nap hava","6. A hold hava","7. A vulkánok hava","8. A perzselő homok hava","9. A színek hava","10. A levelek hava"];
    
    const lanawinDays = [35,35,29,29,30,30,32,24,31,31];
    const lanawinDaysSum = lanawinDays.reduce((p,c) => p+c,0);

    const vizHonapok = [31,31];
    const levegoHonapok = [28,31];
    const egyensulyHonapok = [30,31];
    const tuzHonapok = [30,31,31];
    const foldHonapok = [30,31,30];

    let month1 = {
        "Kelat" : [1,7,13,19,25,31]
    };
    let month2 = {
        "Willor" : [1,7,13,19,25,31]
    };
    let month3 = {
        "Oren" : [1,7,13,19,25]
    };
    let month4 = {
        "Tarun" : [1,7,13,19,25]
    };
    let month5 = {
        "Myr" : [1,7,13,19,25]
    };
    let month7 = {
        "Myr" : [1,7,13,19,25,31]
    };
    let month8 = {
        "Oren" : [1,7,13,19]
    };
    let month9 = {
        "Oren" : [1,7,13,19,25,31]
    };
    let month10 = {
        "Willor" : [1,7,13,19,25,31]
    };

    // lanawinDayYearDiff = 6
    const lanawinDayYearDiff = Math.round((365 - lanawinDays.reduce((p,c) => p+c,0)) / 10); 

     // mennyi korrekcio van egy havonta es hany naponta van korrekcio
    let correctionDays = [];
    lanawinDays.forEach((v) => {correctionDays.push(Math.round((v/lanawinDayYearDiff)))});
    console.log(correctionDays);

    // osszesen hany nap elteres van a lanawini naptarhoz kepest
    const diffRepeatSum = ((365 - lanawinDays.reduce((p,c) => p+c,0)) * (myYear - 2013));

    console.log(diffRepeatSum);
    console.log((diffRepeatSum - lanawinDaysSum) / 6);

    if (myMonth == 1 || myMonth == 12) {
        let viz = lanawinDays.slice(0,2);
        let lanawinDaySum = Math.round((diffRepeatSum - lanawinDaysSum)/correctionDays[0]);
        let lanawinDay = viz.reduce((p,c) => p+c,0) - lanawinDaySum;
        let lanawinMonth;
        if (lanawinDaySum > viz[0]) {
            lanawinMonth = lanawinMonthNames[0];
        } else {
            lanawinMonth = lanawinMonthNames[1];
        }
        if (lanawinDay > lanawinDays[0]) {
            lanawinDay = lanawinDay - lanawinDays[0];
        }

        console.log(viz);
        console.log("lanawinDaySum",lanawinDaySum);
        console.log("hanyadika",lanawinDay);
        console.log(lanawinMonth);
        console.log(lanawinYear);

    } else if (myMonth == 2 || myMonth == 3) {
        let levego = lanawinDays.slice(2,4);
        let lanawinDaySum = Math.round((diffRepeatSum - lanawinDaysSum)/correctionDays[2]);
        let lanawinDay = levego.reduce((p,c) => p+c,0) - lanawinDaySum;
        let lanawinMonth;
        if (lanawinDaySum > levego[0]) {
            lanawinMonth = lanawinMonthNames[2];
        } else {
            lanawinMonth = lanawinMonthNames[3];
        }
        console.log(levego);
        console.log("lanawinDaySum",lanawinDaySum);
        console.log("hanyadika",lanawinDay);
        console.log(lanawinMonth);
        console.log(lanawinYear);

    } else if (myMonth == 4 || myMonth == 5) {
        let egyensuly = lanawinDays.slice(4,6);
        let lanawinDaySum = Math.round((diffRepeatSum - lanawinDaysSum)/correctionDays[4]);
        let lanawinDay = egyensuly.reduce((p,c) => p+c,0) - lanawinDaySum;
        let lanawinMonth;
        if (lanawinDaySum > egyensuly[0]) {
            lanawinMonth = lanawinMonthNames[4];
        } else {
            lanawinMonth = lanawinMonthNames[5];
        }
        console.log(egyensuly);
        console.log("lanawinDaySum",lanawinDaySum);
        console.log("hanyadika",lanawinDay);
        console.log(lanawinMonth);
        console.log(lanawinYear);

    } else if (myMonth >= 6 && myMonth <= 8) {
        let tuz = lanawinDays.slice(6,8);
        let lanawinDaySum = Math.round((diffRepeatSum - lanawinDaysSum)/correctionDays[6]);
        let lanawinDay = tuz.reduce((p,c) => p+c,0) - lanawinDaySum;
        let lanawinMonth;
        if (lanawinDaySum > tuz[1]) {
            lanawinMonth = lanawinMonthNames[6];
        } else {
            lanawinMonth = lanawinMonthNames[7];
        }
        console.log(tuz);
        console.log("lanawinDaySum",lanawinDaySum);
        console.log("hanyadika",lanawinDay);
        console.log(lanawinMonth);
        console.log(lanawinYear);

    } else if (myMonth >= 9 && myMonth <= 11) {
        let fold = lanawinDays.slice(8,10);
        let lanawinDaySum = Math.round((diffRepeatSum - lanawinDaysSum)/correctionDays[8]);
        let lanawinDay = fold.reduce((p,c) => p+c,0) - lanawinDaySum;
        let lanawinMonth;
        if (lanawinDaySum > fold[0]) {
            lanawinMonth = lanawinMonthNames[8];
        } else {
            lanawinMonth = lanawinMonthNames[9];
        }
        console.log(fold);
        console.log("lanawinDaySum",lanawinDaySum);
        console.log("hanyadika",lanawinDay);
        console.log(lanawinMonth);
        console.log(lanawinYear);
    }
    


}


// console.log(calendar("2022.3.16"));
// console.log(calendar("2022.8.9"));
console.log(calendar("2022.1.8"));