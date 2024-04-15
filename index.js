const fixedFitQuota = {
    currentYearOptionChosen:15.50,
    nextYearOptionChosen:15.50,
    afterNextYearOptionChosen:13.00
};
const dailyRentability = {
    currentYearRentabilityOn: {
        master: {
            currentYearOptionChosen: 0.060460,
            nextYearOptionChosen: 0.059425,
            afterNextYearOptionChosen: 0.052597
        },
        cdb: {
            currentYearOptionChosen: 0.037742,
            nextYearOptionChosen: 0.037891,
            afterNextYearOptionChosen: 0.036781
        },
        irFree: {
            currentYearOptionChosen: 0.059751,
            nextYearOptionChosen: 0.051874,
            afterNextYearOptionChosen: 0.050764
        },
        lciLca: {
            currentYearOptionChosen: 0.031435,
            nextYearOptionChosen: 0.030139,
            afterNextYearOptionChosen: 0.029029
        },
        fit: {
            currentYearOptionChosen: fixedFitQuota.nextYearOptionChosen,
            nextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
            afterNextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen
        }
    },
    nextYearRentabilityOn: {
        master: {
            nextYearOptionChosen: 0.059425,
            afterNextOptionYearChosen: 0.051563
        },
        cdb: {
            nextYearOptionChosen: 0.036708,
            afterNextOptionYearChosen: 0.036857
        },
        irFree: {
            nextYearOptionChosen: 0.058717,
            afterNextOptionYearChosen: 0.050840
        },
        lciLca: {
            nextYearOptionChosen: 0.030401,
            afterNextOptionYearChosen: 0.029105
        },
        fit: {
            nextYearOptionChosen: fixedFitQuota.nextYearOptionChosen,
            afterNextOptionYearChosen: fixedFitQuota.nextYearOptionChosen
        }
    },
    afterNextYearRentabilityOn: {
        master: {
            afterNextYearOptionChosen: 0.051486
        },
        cdb: {
            afterNextYearOptionChosen: 0.036781
        },
        irFree: {
            afterNextYearOptionChosen: 0.050764
        },
        lciLca: {
            afterNextYearOptionChosen: 0.029029
        },
        fit: {
            afterNextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen
        }
    }
};
const holidays = [
    new Date('01/01/2024').getTime(),
    new Date('02/12/2024').getTime(),
    new Date('02/13/2024').getTime(),
    new Date('03/29/2024').getTime(),
    new Date('04/21/2024').getTime(),
    new Date('05/01/2024').getTime(),
    new Date('05/30/2024').getTime(),
    new Date('09/07/2024').getTime(),
    new Date('10/12/2024').getTime(),
    new Date('11/02/2024').getTime(),
    new Date('11/15/2024').getTime(),
    new Date('11/20/2024').getTime(),
    new Date('12/25/2024').getTime(),
    new Date('01/01/2025').getTime(),
    new Date('03/03/2025').getTime(),
    new Date('03/04/2025').getTime(),
    new Date('04/18/2025').getTime(),
    new Date('04/21/2025').getTime(),
    new Date('05/01/2025').getTime(),
    new Date('06/19/2025').getTime(),
    new Date('09/07/2025').getTime(),
    new Date('10/12/2025').getTime(),
    new Date('11/02/2025').getTime(),
    new Date('11/15/2025').getTime(),
    new Date('11/20/2025').getTime(),
    new Date('12/25/2025').getTime(),
    new Date('01/01/2026').getTime(),
    new Date('02/16/2026').getTime(),
    new Date('02/17/2026').getTime(),
    new Date('04/03/2026').getTime(),
    new Date('04/21/2026').getTime(),
    new Date('05/01/2026').getTime(),
    new Date('06/04/2026').getTime(),
    new Date('09/07/2026').getTime(),
    new Date('10/12/2026').getTime(),
    new Date('11/02/2026').getTime(),
    new Date('11/15/2026').getTime(),
    new Date('11/20/2026').getTime(),
    new Date('12/25/2026').getTime(),
];

const updateChart = (precnetRentabilityValue, cdbRentabilityValue, lciLcaRentabilityValue) => {
     
    const totalRentabilityValue = precnetRentabilityValue + cdbRentabilityValue + lciLcaRentabilityValue,
        precnetPercentage = (precnetRentabilityValue / totalRentabilityValue) * 100 || 0 ,
        cdbPercentage = (cdbRentabilityValue / totalRentabilityValue) * 100 || 0,
        lciLcaPercentage = (lciLcaRentabilityValue / totalRentabilityValue) * 100 || 0,
        precNetBar = document.getElementById('precnet'),
        cdbBar     = document.getElementById('cdb'),
        lciLcaBar  = document.getElementById('lci-lca'),
        precnetValue = document.querySelector("#precnetValue"), 
        cdbValue = document.querySelector("#cdbValue"), 
        lciLcaValue = document.querySelector("#lciLcaValue") ;

    
    if (precnetRentabilityValue) precnetValue.innerHTML = "PRECNET: " + precnetRentabilityValue.toFixed(4)
    if (cdbRentabilityValue)     cdbValue.innerHTML     = "CDB: " + cdbRentabilityValue.toFixed(4)
    if (lciLcaRentabilityValue)  lciLcaValue.innerHTML  = "LCI/LCA: " + lciLcaRentabilityValue.toFixed(4)

    precNetBar.style.width = precnetPercentage + '%'
    
    if(cdbPercentage) {
        cdbBar.style.display = ''
        cdbBar.style.width = cdbPercentage + '%'
    }else{
        cdbBar.style.display = 'none'
    }
    if(lciLcaPercentage){
        lciLcaBar.style.display = ''   
        lciLcaBar.style.width = lciLcaPercentage + '%'
    }else{
        lciLcaBar.style.display = 'none'
    }
};
const workingDaysCalculator = (initialDate, finalDate, holidays) => {
    initialDate = new Date(initialDate);
    finalDate = new Date(finalDate);

    if (isNaN(initialDate.getTime()) || isNaN(finalDate.getTime())) return "Datas inválidas";

    let workingDays = {};

    while (initialDate <= finalDate) {
        if (initialDate.getDay() !== 0 && initialDate.getDay() !== 6) {
            if (!holidays.some(holyDay => {
                const holyDayToDate = new Date(holyDay);
                return holyDayToDate.getDate() === initialDate.getDate() &&
                       holyDayToDate.getMonth() === initialDate.getMonth() &&
                       holyDayToDate.getFullYear() === initialDate.getFullYear();
            })) {
                const year = initialDate.getFullYear();
                if (!workingDays.hasOwnProperty(year)) {
                    workingDays[year] = 1;
                } else {
                    workingDays[year]++;
                }
            }
        }
        initialDate.setDate(initialDate.getDate() + 1);
    }

    return workingDays;
};
const handleCurrentRentability = (validityYearInput, quotaTypeInput) => {
    const currentYear = new Date().getFullYear();
    const result = {};

    if (validityYearInput === currentYear) {
        result[quotaTypeInput] = {
            currentYearOptionChosen: dailyRentability.currentYearRentabilityOn[quotaTypeInput].currentYearOptionChosen
        };
    } else if (validityYearInput === currentYear + 1) {
        result[quotaTypeInput] = {
            currentYearOptionChosen: dailyRentability.currentYearRentabilityOn[quotaTypeInput].currentYearOptionChosen,
            nextYearOptionChosen: dailyRentability.nextYearRentabilityOn[quotaTypeInput].nextYearOptionChosen
        };
    } else if (validityYearInput === currentYear + 2) {
        result[quotaTypeInput] = {
            currentYearOptionChosen: dailyRentability.currentYearRentabilityOn[quotaTypeInput].currentYearOptionChosen,
            nextYearOptionChosen: dailyRentability.currentYearRentabilityOn[quotaTypeInput].nextYearOptionChosen,
            afterNextYearOptionChosen: dailyRentability.afterNextYearRentabilityOn[quotaTypeInput].afterNextYearOptionChosen
        };
    } else {
        return undefined;
    }
    return result;
};
const calcRentability = (amountInvested, rentabilitiesValuesByYear, selectedQuota, workingDays ) => {
    amountInvested = Number(amountInvested)
    let returnValue = amountInvested,
        counter = 0,
        currentYear = new Date().getFullYear(),
        yearsOfCalculation = [currentYear, currentYear+1, currentYear+2];
    for (year in rentabilitiesValuesByYear[selectedQuota]) {
        if (counter === 0 ){
            returnValue = (amountInvested*((1+rentabilitiesValuesByYear[selectedQuota][year]/100))**workingDays[yearsOfCalculation[counter]])
        }
        else {
            returnValue *= (1+rentabilitiesValuesByYear[selectedQuota][year]/100)**workingDays[yearsOfCalculation[counter]]
        }
        counter++
    }
    return returnValue
};
const handleQuotaResult = (amountInvested, selectedQuota, workingDays, payBackDate ) => {
    if(selectedQuota === 'master'){
        let rentabilitiesValuesByYearPrecnet        = handleCurrentRentability(payBackDate, selectedQuota),
            rentabilitiesValuesByYearAnotherQuota   = handleCurrentRentability(payBackDate, 'cdb');
        return {
            precnet: calcRentability(amountInvested, rentabilitiesValuesByYearPrecnet, selectedQuota, workingDays),
            cdb: calcRentability(amountInvested, rentabilitiesValuesByYearAnotherQuota, 'cdb', workingDays),
        }
    }
    if(selectedQuota === 'irFree'){
        let rentabilitiesValuesByYearPrecnet        = handleCurrentRentability(payBackDate, selectedQuota),
            rentabilitiesValuesByYearAnotherQuota   = handleCurrentRentability(payBackDate, 'lciLca');
        return {
            precnet: calcRentability(amountInvested, rentabilitiesValuesByYearPrecnet, selectedQuota, workingDays),
            lciLca: calcRentability(amountInvested, rentabilitiesValuesByYearAnotherQuota, 'lciLca', workingDays),
        }
    }
    if(selectedQuota === 'fit'){
        console.log('fit')
        let rentabilitiesValuesByYearPrecnet    = handleCurrentRentability(payBackDate, selectedQuota),
        rentabilitiesValuesByYearAnotherQuota   = handleCurrentRentability(payBackDate, 'fit');
        return {
            precnet: calcRentability(amountInvested, rentabilitiesValuesByYearPrecnet, selectedQuota, workingDays),
            fit: calcRentability(amountInvested, rentabilitiesValuesByYearAnotherQuota, 'fit', workingDays),
        }
    }
    return false;
};
const showResultsOnScreen = (amountInvested, selectedQuota, workingDays, payBackDate ) => {
    const   precnetValue =  handleQuotaResult(amountInvested, selectedQuota, workingDays, payBackDate ).precnet || null,
            cdbValue     =  handleQuotaResult(amountInvested, selectedQuota, workingDays, payBackDate ).cdb || null,
            lciLcaValue  =  handleQuotaResult(amountInvested, selectedQuota, workingDays, payBackDate ).lciLca || null;
    updateChart(precnetValue, cdbValue, lciLcaValue);
};
const pickCheckedRadio = inputsArray => {
    let checkedInput;
    inputsArray.forEach(input => {input.checked? checkedInput=input:false})
    return checkedInput
};

const validateFields = (amountInvestedInput, validityYearInput, quotaTypeInput, monthOfPaymentInput) => {
    if((amountInvestedInput || validityYearInput || quotaTypeInput || monthOfPaymentInput) == false){
        return false
    }
    return true
};

let amountInvestedInput = document.querySelector("input[name='amountInvested']"),
    validityYearInputs  = document.querySelectorAll(".yearInput"),
    quotaTypeInputs     = document.querySelectorAll(".quotaTypeInput"),
    monthOfPaymentInput = document.querySelector("input[name='monthOfPayment']"),
    workingDays =  workingDaysCalculator(new Date(), new Date('2025-12-26'), holidays),
    validityYearValue,
    quotaTypeValue,
    monthOfPaymentValue;

amountInvestedInput.addEventListener('input', () => {
    validateFields(amountInvestedInput, pickCheckedRadio(validityYearInputs), pickCheckedRadio(quotaTypeInputs), monthOfPaymentInput)
    showResultsOnScreen(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, new Date('2025-12-26').getFullYear())
});

validityYearInputs.forEach(input => input.addEventListener('click', () => {
    if(amountInvestedInput.value != undefined) showResultsOnScreen(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, new Date('2025-12-26').getFullYear())
}));

quotaTypeInputs.forEach(input => input.addEventListener('click', () => {
    if(amountInvestedInput.value != undefined) showResultsOnScreen(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, new Date('2025-12-26').getFullYear())
}))

monthOfPaymentInput.addEventListener('change', () => {
    workingDays =  workingDaysCalculator(new Date(), amountInvestedInput.value, holidays);
    if(amountInvestedInput.value != undefined) showResultsOnScreen(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, new Date('2025-12-26').getFullYear())
});