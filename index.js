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
            currentYearOptionChosen: 0.052597,
            nextYearOptionChosen: 0.051563,
            afterNextYearOptionChosen: 0.051486
        },
        cdb: {
            currentYearOptionChosen: 0.037891,
            nextYearOptionChosen: 0.036857,
            afterNextYearOptionChosen: 0.036781
        },
        irFree: {
            currentYearOptionChosen: 0.051874,
            nextYearOptionChosen: 0.050840,
            afterNextYearOptionChosen: 0.050764
        },
        lciLca: {
            currentYearOptionChosen: 0.030139,
            nextYearOptionChosen: 0.029105,
            afterNextYearOptionChosen: 0.029029
        },
        fit: {
            currentYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
            nextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
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

const formatNumber = number => number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const updateChart = (precnetRentabilityValue, cdbRentabilityValue, lciLcaRentabilityValue) => {
    const totalRentabilityValue = precnetRentabilityValue + cdbRentabilityValue + lciLcaRentabilityValue,
          precnetPercentage = (precnetRentabilityValue / totalRentabilityValue) * 100 || 0,
          cdbPercentage     = (cdbRentabilityValue     / totalRentabilityValue) * 100 || 0,
          lciLcaPercentage  = (lciLcaRentabilityValue  / totalRentabilityValue) * 100 || 0,
          precNetBar    = document.getElementById('precnet'),
          cdbBar        = document.getElementById('cdb'),
          lciLcaBar     = document.getElementById('lci-lca'),
          precnetValue  = document.querySelector("#precnetValue"), 
          cdbValue      = document.querySelector("#cdbValue"), 
          lciLcaValue   = document.querySelector("#lciLcaValue") ;

    if (precnetRentabilityValue) precnetValue.innerHTML = "R$ " + formatNumber(precnetRentabilityValue)
    if (cdbRentabilityValue)     cdbValue.innerHTML     = "R$ "     + formatNumber(cdbRentabilityValue)
    if (lciLcaRentabilityValue)  lciLcaValue.innerHTML  = "R$ " + formatNumber(lciLcaRentabilityValue)

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

    let workingDays = {
        total: 0
    };

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
                workingDays.total++; // Incrementa o total de dias úteis
            }
        }
        initialDate.setDate(initialDate.getDate() + 1);
    }

    workingDays.totalYears = Object.keys(workingDays).length - 1; // Exclui a propriedade 'total'

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
            currentYearOptionChosen: dailyRentability.afterNextYearRentabilityOn[quotaTypeInput].currentYearOptionChosen,
            nextYearOptionChosen: dailyRentability.afterNextYearRentabilityOn[quotaTypeInput].nextYearOptionChosen,
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
            if(selectedQuota === 'fit') returnValue = (amountInvested*((1+rentabilitiesValuesByYear[selectedQuota][year]/100)**(workingDays.total/252)))
            else returnValue                        = (amountInvested*((1+rentabilitiesValuesByYear[selectedQuota][year]/100))**workingDays[yearsOfCalculation[counter]])
        }
        else {
            if (selectedQuota != 'fit') returnValue *= (1+rentabilitiesValuesByYear[selectedQuota][year]/100)**workingDays[yearsOfCalculation[counter]]
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
        let rentabilitiesValuesByYearPrecnet        = handleCurrentRentability(payBackDate, selectedQuota),
            rentabilitiesValuesByYearAnotherQuota   = handleCurrentRentability(payBackDate, 'lciLca');
        return {
            precnet: calcRentability(amountInvested, rentabilitiesValuesByYearPrecnet, selectedQuota, workingDays),
            lciLca: calcRentability(amountInvested, rentabilitiesValuesByYearAnotherQuota, 'lciLca', workingDays),
        }
    }
    return false;
};
const showResultsOnScreen = (amountInvested, selectedQuota, workingDays, payBackDate ) => {
    const   precnetValue =  handleQuotaResult(amountInvested, selectedQuota, workingDays, payBackDate ).precnet || null,
            cdbValue     =  handleQuotaResult(amountInvested, selectedQuota, workingDays, payBackDate ).cdb     || null,
            lciLcaValue  =  handleQuotaResult(amountInvested, selectedQuota, workingDays, payBackDate ).lciLca  || null;
    updateChart(precnetValue, cdbValue, lciLcaValue);
};
const showHiddenChartContainer = (inputValue) => {
    let chartContainer = document.querySelector('.simulatorContainer .chartContainer')
    if (inputValue != '') {
        document.querySelector('.instructionContainer').classList.add('hidden')
        chartContainer.classList.remove('hidden')
        return
    }
    document.querySelector('.instructionContainer').classList.remove('hidden')
    chartContainer.classList.add('hidden')
    return

};
const changeMonthDisplay = (selectedMonthIndex) => {
    switch(Number(selectedMonthIndex)) {
        case 0:
            return 'Jan';
        case 1:
            return 'Fev';
        case 2:
            return 'Mar';
        case 3:
            return 'Abr';
        case 4:
            return 'Mai';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Ago';
        case 8:
            return 'Set';
        case 9:
            return 'Out';
        case 10:
            return 'Nov';
        case 11:
            return 'Dez';
        default:
            return ''; 
    }
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
const changeQuotaInformationText = (selectedQuota, quotaInformationText) => {
    
    if(selectedQuota === 'master') return quotaInformationText.innerText = '* valores brutos. Com a PrecNet, o investidor receberá o valor bruto em sua conta bancária e deverá recolher o imposto de renda sobre o ganho de capital até o final do mês seguinte na alíquota fixa de 15%. No investimento com CDB, a instituição financeira fará a retenção do imposto de renda na fonte, de acordo com a tabela regressiva, que pode ser de 22,5% a 15%.';
    if(selectedQuota === 'irFree') return quotaInformationText.innerText = '* valores líquidos caso o resgate seja inferior a R$35 mil. Com a PrecNet, os preços de cada cota ir free são calculados de modo que o investidor receba menos do que R$35 mil no resgate da operação, ficando assim isento de imposto de renda sobre o ganho de capital.';
};

let amountInvestedInput = document.querySelector("input[name='amountInvested']"),
    validityYearInputs  = document.querySelectorAll(".yearInput"),
    quotaTypeInputs     = document.querySelectorAll(".quotaTypeInput"),
    monthOfPaymentInput = document.querySelector("input[name='monthOfPayment']"),
    quotaInformation    = document.querySelector(".quotaInformationContainer .information"),
    monthDisplay        = document.querySelector('#selectedMonth'),
    validityDate        = new Date(pickCheckedRadio(validityYearInputs).value, monthOfPaymentInput.value, 30),
    workingDays         = workingDaysCalculator(new Date(), validityDate, holidays),
    validityYearValue,
    quotaTypeValue,
    monthOfPaymentValue;

monthDisplay.innerHTML = changeMonthDisplay(monthOfPaymentInput.value)

const startSimulation = (amountInvestedInput) => {
    amountInvestedInput.value = formatNumber(amountInvestedInput.value)
    showHiddenChartContainer(amountInvestedInput.value)
    validateFields(
        amountInvestedInput, 
        pickCheckedRadio(validityYearInputs), 
        pickCheckedRadio(quotaTypeInputs), 
        monthOfPaymentInput
    )
    showResultsOnScreen(
        amountInvestedInput.value,
        pickCheckedRadio(quotaTypeInputs).value,
        workingDays,validityDate.getFullYear()
    )
}

amountInvestedInput.addEventListener('input', (e) => {
    startSimulation(e.target)
});

validityYearInputs.forEach(input => input.addEventListener('click', () => {
    validityDate = new Date(pickCheckedRadio(validityYearInputs).value, monthOfPaymentInput.value, 30)
    workingDays =  workingDaysCalculator(new Date(), validityDate, holidays)
    if(amountInvestedInput.value != undefined) showResultsOnScreen(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, validityDate.getFullYear())
}));

quotaTypeInputs.forEach(input => input.addEventListener('click', () => {
    if(amountInvestedInput.value != undefined) showResultsOnScreen(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, validityDate.getFullYear())
    changeQuotaInformationText(pickCheckedRadio(quotaTypeInputs).value, quotaInformation)
}))

monthOfPaymentInput.addEventListener('input', () => {
    validityDate = new Date(pickCheckedRadio(validityYearInputs).value, monthOfPaymentInput.value, 30)
    monthDisplay.innerHTML = changeMonthDisplay(monthOfPaymentInput.value)
    workingDays =  workingDaysCalculator(new Date(), validityDate, holidays)
    if(amountInvestedInput.value != undefined) showResultsOnScreen(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, validityDate.getFullYear())
});

startSimulation(amountInvestedInput)