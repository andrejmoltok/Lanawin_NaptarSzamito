// date formátum = YYYY-M-D vagy YYYY.M.D

function calendar(date) {

    let myDate;

    if (date.includes('-')) {
        myDate = date.split('-');
    } else if (date.includes('.')) {
        myDate = date.split('.');
    }

    let myYear = Number(myDate[0] - 1);
    let myMonth = Number(myDate[1]);
    let myDay = Number(myDate[2]);
    
    const calendarInit = 6882; //6882.1 - 2013.december
    const lanaYear = calendarInit + (myYear - 2013);
    const lanaWeekLen = 6;
    const lanaDayNames = ["Myr", "Tarun", "Oren", "Willor", "Kelat", "Borquos"];
    const lanaMonthNames = ["1.Folyók hava","2.Tavak, tengerek hava","3.Fák, virágok hava","4.Mezők, rétek hava","5.A nap hava","6.A hold hava","7.A vulkánok hava","8.A perzselő homok hava","9.A színek hava","10.A levelek hava"];
    
    const lanaMonthDays = [35,35,29,29,30,30,32,24,31,31];
    const lanaDaysSum = lanaMonthDays.reduce((p,c) => p+c,0);

    let vizHonapok = [35,35];
    let levegoHonapok = [29,29];
    let egyensulyHonapok = [30,30];
    let tuzHonapok = [32,24];
    let foldHonapok = [31,31];

    let evszakok = [vizHonapok,levegoHonapok,egyensulyHonapok,tuzHonapok,foldHonapok];

    //console.log("1 lana ev",lanaMonthDays.reduce((p,c) =>p+c,0),"nap");
    // lanaDayYearDiff = 6
    const lanaDayYearDiff = Math.round((365 - lanaMonthDays.reduce((p,c) => p+c,0)) / 10);
    //console.log("oszto havi korrekcio szamitashoz",lanaDayYearDiff);

     // mennyi korrekcio van egy havonta es hany naponta van korrekcio
    let correctionDays = [];
    lanaMonthDays.forEach((v) => {correctionDays.push(Math.round((v/lanaDayYearDiff)))});
    //console.log("korrekciok",correctionDays);


    let leapYearDays = (myYear - 2013) / 4; 
    //console.log(leapYearDays);
    // osszesen hany nap elteres van a lanai naptarhoz kepest
    const diffRepeatSum = (((365 + leapYearDays) - lanaMonthDays.reduce((p,c) => p+c,0)) * (myYear - 2013));

    //console.log("nap kulonbseg ismetles osszesen ",diffRepeatSum);
    //lanaDaySum = (nap kulonbseg ismetles ossz) - (1 lana ev napokban) * (mostani ev - naptarkezdet);


    if (myMonth == 1 || myMonth == 12) {
        let viz = lanaMonthDays.slice(0,2);
        let lanaDaySum = Math.round((diffRepeatSum - lanaDaysSum) / correctionDays[0]);
        let lanaDay = viz.reduce((p,c) => p+c,0) - lanaDaySum;
        let lanaMonth;
        if (lanaDaySum > viz[0]) {
         lanaMonth = lanaMonthNames[0];
        } else {
         lanaMonth = lanaMonthNames[1];
        }
        if (lanaDay > lanaMonthDays[0]) {
         lanaDay = lanaDay - lanaMonthDays[0];
        }
        //console.log(diffRepeatSum + " - 306 / " + correctionDays[0]);
        console.log(viz);
        console.log("lanaDaySum", lanaDaySum);
        console.log("hanyadika", lanaDay);
        console.log(lanaMonth);
        console.log(lanaYear);

    } else if (myMonth == 2 || myMonth == 3) {
        let lanaDay;
        let lanaMonth;
        let lanaDayName;
        //let daySpeed = Math.abs((30 - Math.round(61/2)) / lanaWeekLen).toPrecision(1);
        if (myMonth == 2) {
            
        } else if (myMonth == 3) {

        }
    } else if (myMonth == 4 || myMonth == 5) {
        let lanaDay;
        let lanaMonth;
        let lanaDayName;
        //let daySpeed = Math.abs((30 - Math.round(61/2)) / lanaWeekLen).toPrecision(1);
        //console.log(daySpeed);
        if (myMonth == 4) {
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
        return date + " => " + lanaYear+"."+lanaMonth+"."+lanaDay+"."+lanaDayName; 
    } else if (myMonth >= 6 && myMonth <= 8) {
        let lanaDay;
        let lanaMonth;
        let lanaDayName;
        let daySpeed = Number(((30 - Math.round(56/3)) / lanaWeekLen).toPrecision(2));
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
            lanaDay = Math.round(myDay / daySpeed) + 20;
            lanaMonth = lanaMonthNames[6];
            //console.log(lanaDay);
            if (lanaDay > 32 || lanaDay < 7) {
                lanaMonth = lanaMonthNames[7];
                lanaDay = Math.round(myDay / daySpeed) - 11;
                //console.log(lanaDay);
            }
            //console.log(lanaDay);
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[2];
                    //console.log(lanaDay);
                } 
                else if (lanaDay <= 6) {
                    i == 4 ? i = -2 : j % 6 == 0 ? i = -1 : i;
                    lanaDayName = lanaDayNames[2+i];
                    //console.log(lanaDay);
                    console.log(i+" - "+j+" - "+lanaDayName);
                }
            }
        } else if (myMonth == 8) {
            lanaDay = Math.round(myDay / daySpeed) + 7;
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
        return date + " => " + lanaYear+"."+lanaMonth+"."+lanaDay+"."+lanaDayName;
    } else if (myMonth >= 9 && myMonth <= 11) {
        let lanaDay;
        let lanaMonth;
        let lanaDayName;
        let daySpeed = ((30 - Math.round(62/3)) / lanaWeekLen);
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
                lanaDay = Math.round(myDay / daySpeed) - 11;
            }
            for (let i = 0,j = 1; i < lanaDayNames.length, j <= lanaDay; i++, j++) {
                if (lanaDay == 1) {
                    lanaDayName = lanaDayNames[3];
                } else {
                    i == 3 ? i = -3 : j % 6 == 0 ? i = -1 : i;
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
        return date + " => " + lanaYear+"."+lanaMonth+"."+lanaDay+"."+lanaDayName;
    }
    
}
console.log(calendar("2022.5.31"));