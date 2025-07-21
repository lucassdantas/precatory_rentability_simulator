//frontend interactions methods
const amountInvestedInputMask = event => {
  let input = event.target;
  // Verifica se o valor é maior que 100000000
  if (formatToOnlyNumbers(input.value) >= 100000000) {
      input.value = '100.000.000';
  }
  let formattedValue = input.value.replace(/\D/g, '');
  formattedValue = formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  formattedValue = formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  input.value = formattedValue;
}
const highlightSelectedCheckInput = input => {
    let currentInputType;
    if(input.classList.contains('yearInput')){
        currentInputType = '.validityYearInputContainer'
    }
    if(input.classList.contains('quotaTypeInput')){
        currentInputType = '.quotaTypeInputContainer'
    }

    document.querySelectorAll(currentInputType +' .inputAndLabelContainer').forEach(container => {
        container.classList.remove('selected');
    });
    document.querySelectorAll(currentInputType +' .inputAndLabelContainer label').forEach(label => {
        label.classList.remove('bold');
    });

    input.closest('.inputAndLabelContainer').classList.add('selected');
    input.nextElementSibling.classList.add('bold');
};
const highlightSelectedMonth = (selectedMonth, monthListSpans) => {
    selectedMonth = document.querySelector(`.monthPaymentAndList #${selectedMonth}`)
    monthListSpans.forEach(span => {
        span.classList.remove('textGreen');
        span.classList.remove('bold');
    });

    selectedMonth.classList.add('textGreen');
    selectedMonth.classList.add('bold');
};

//------------------------
//backend methods


const fixedFitQuota = {
    currentYearOptionChosen:15.50,
    nextYearOptionChosen:15.50,
    afterNextYearOptionChosen:13.00
};
const dailyRentability = {
  currentYearRentabilityOn: {
      master: {
          currentYearOptionChosen: 0.068526,
          nextYearOptionChosen: 0.065988,
          afterNextYearOptionChosen: 0.068526
      },
      cdb: {
          currentYearOptionChosen: 0.051657,
          nextYearOptionChosen: 0.049120,
          afterNextYearOptionChosen: 0.047604
      },
      irFree: {
          currentYearOptionChosen: 0.068526,
          nextYearOptionChosen: 0.065988,
          afterNextYearOptionChosen: 0.068526
      },
      lciLca: {
          currentYearOptionChosen: 0.049341,
          nextYearOptionChosen: 0.049341,
          afterNextYearOptionChosen: 0.044966
      },
      fit: {
          currentYearOptionChosen: fixedFitQuota.nextYearOptionChosen,
          nextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
          afterNextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen
      }
  },
  nextYearRentabilityOn: {
      master: {
          nextYearOptionChosen: 0.065988,
          afterNextOptionYearChosen: 0.065988
      },
      cdb: {
          nextYearOptionChosen: 0.049120,
          afterNextOptionYearChosen: 0.045067
      },
      irFree: {
          nextYearOptionChosen: 0.065988,
          afterNextOptionYearChosen: 0.065988
      },
      lciLca: {
          nextYearOptionChosen: 0.046804,
          afterNextOptionYearChosen: 0.042429
      },
      fit: {
          nextYearOptionChosen: fixedFitQuota.nextYearOptionChosen,
          afterNextOptionYearChosen: fixedFitQuota.nextYearOptionChosen
      }
  },
  afterNextYearRentabilityOn: {
      master: {
          currentYearOptionChosen: 0.044966,
          nextYearOptionChosen: 0.042429,
          afterNextYearOptionChosen: 0.040525
      },
      cdb: {
          currentYearOptionChosen: 0.047604,
          nextYearOptionChosen: 0.045067,
          afterNextYearOptionChosen: 0.043163
      },
      irFree: {
          currentYearOptionChosen: 0.068526,
          nextYearOptionChosen: 0.065988,
          afterNextYearOptionChosen: 0.064083
      },
      lciLca: {
          currentYearOptionChosen: 0.044966,
          nextYearOptionChosen: 0.042429,
          afterNextYearOptionChosen: 0.040525
      },
      fit: {
          currentYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
          nextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
          afterNextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen
      }
  }
};
// const dailyRentability = {
//     currentYearRentabilityOn: {
//         master: {
//             currentYearOptionChosen: 0.065227,
//             nextYearOptionChosen: 0.063778,
//             afterNextYearOptionChosen: 0.064306
//         },
//         cdb: {
//             currentYearOptionChosen: 0.041519,
//             nextYearOptionChosen: 0.040070,
//             afterNextYearOptionChosen: 0.036781
//         },
//         irFree: {
//             currentYearOptionChosen: 0.061698,
//             nextYearOptionChosen: 0.060248,
//             afterNextYearOptionChosen: 0.050764
//         },
//         lciLca: {
//             currentYearOptionChosen: 0.036377,
//             nextYearOptionChosen: 0.034928,
//             afterNextYearOptionChosen: 0.035015
//         },
//         fit: {
//             currentYearOptionChosen: fixedFitQuota.nextYearOptionChosen,
//             nextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
//             afterNextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen
//         }
//     },
//     nextYearRentabilityOn: {
//         master: {
//             nextYearOptionChosen: 0.065227,
//             afterNextOptionYearChosen: 0.064306
//         },
//         cdb: {
//             nextYearOptionChosen: 0.040070,
//             afterNextOptionYearChosen: 0.037725
//         },
//         irFree: {
//             nextYearOptionChosen: 0.060248,
//             afterNextOptionYearChosen: 0.060792
//         },
//         lciLca: {
//             nextYearOptionChosen: 0.034928,
//             afterNextOptionYearChosen: 0.033566
//         },
//         fit: {
//             nextYearOptionChosen: fixedFitQuota.nextYearOptionChosen,
//             afterNextOptionYearChosen: fixedFitQuota.nextYearOptionChosen
//         }
//     },
//     afterNextYearRentabilityOn: {
//         master: {
//             currentYearOptionChosen: 0.066980,
//             nextYearOptionChosen: 0.065531,
//             afterNextYearOptionChosen: 0.064306
//         },
//         cdb: {
//             currentYearOptionChosen: 0.040399,
//             nextYearOptionChosen: 0.038950,
//             afterNextYearOptionChosen: 0.037725
//         },
//         irFree: {
//             currentYearOptionChosen: 0.063466,
//             nextYearOptionChosen: 0.062017,
//             afterNextYearOptionChosen: 0.060792
//         },
//         lciLca: {
//             currentYearOptionChosen: 0.036377,
//             nextYearOptionChosen: 0.034928,
//             afterNextYearOptionChosen: 0.032341
//         },
//         fit: {
//             currentYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
//             nextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
//             afterNextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen
//         }
//     }
// };
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

  // Feriados de 2027
  new Date('01/01/2027').getTime(),
  new Date('02/08/2027').getTime(), // Carnaval
  new Date('02/09/2027').getTime(), // Carnaval
  new Date('03/26/2027').getTime(), // Sexta-feira Santa
  new Date('04/21/2027').getTime(),
  new Date('05/01/2027').getTime(),
  new Date('05/27/2027').getTime(), // Corpus Christi
  new Date('09/07/2027').getTime(),
  new Date('10/12/2027').getTime(),
  new Date('11/02/2027').getTime(),
  new Date('11/15/2027').getTime(),
  new Date('11/20/2027').getTime(),
  new Date('12/25/2027').getTime(),

  // Feriados de 2028
  new Date('01/01/2028').getTime(),
  new Date('02/28/2028').getTime(), // Carnaval
  new Date('02/29/2028').getTime(), // Carnaval
  new Date('04/14/2028').getTime(), // Sexta-feira Santa
  new Date('04/21/2028').getTime(),
  new Date('05/01/2028').getTime(),
  new Date('06/15/2028').getTime(), // Corpus Christi
  new Date('09/07/2028').getTime(),
  new Date('10/12/2028').getTime(),
  new Date('11/02/2028').getTime(),
  new Date('11/15/2028').getTime(),
  new Date('11/20/2028').getTime(),
  new Date('12/25/2028').getTime(),
];


const formatNumber = number => number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const updateChart = (precnetRentabilityValue, cdbRentabilityValue, lciLcaRentabilityValue) => {
    const totalRentabilityValue = precnetRentabilityValue + cdbRentabilityValue + lciLcaRentabilityValue,
          precnetPercentage = (precnetRentabilityValue / totalRentabilityValue) * 170 || 0,
          cdbPercentage     = (cdbRentabilityValue     / totalRentabilityValue) * 170 || 0,
          lciLcaPercentage  = (lciLcaRentabilityValue  / totalRentabilityValue) * 170 || 0,
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

    // Loop até o dia anterior ao finalDate
    while (initialDate < finalDate) {
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

    // Verifica se o finalDate é um dia útil e inclui-o se for
    if (finalDate.getDay() !== 0 && finalDate.getDay() !== 6) {
        if (!holidays.some(holyDay => {
            const holyDayToDate = new Date(holyDay);
            return holyDayToDate.getDate() === finalDate.getDate() &&
                   holyDayToDate.getMonth() === finalDate.getMonth() &&
                   holyDayToDate.getFullYear() === finalDate.getFullYear();
        })) {
            const year = finalDate.getFullYear();
            if (!workingDays.hasOwnProperty(year)) {
                workingDays[year] = 1;
            } else {
                workingDays[year]++;
            }
            workingDays.total++; // Incrementa o total de dias úteis
        }
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

const quotaResults = (amountInvested, selectedQuota, workingDays, payBackDate ) => {
    selectedQuota='irFree'
    amountInvested = formatToOnlyNumbers(amountInvested)
    const   precnetValue =  handleQuotaResult(amountInvested, selectedQuota, workingDays, payBackDate ).precnet || null;

    if(precnetValue > 35000) selectedQuota='master'
    const   cdbValue     =  handleQuotaResult(amountInvested, selectedQuota, workingDays, payBackDate ).cdb     || null,
            lciLcaValue  =  handleQuotaResult(amountInvested, selectedQuota, workingDays, payBackDate ).lciLca  || null;

    changeQuotaInformationText(selectedQuota, quotaInformation)
    
    return{precnetValue, cdbValue, lciLcaValue};
};
const showResultsOnScreen = (quotaResults ) => {
    updateChart(quotaResults.precnetValue, quotaResults.cdbValue, quotaResults.lciLcaValue);
};
const showHiddenChartContainerIfValueIsEqualorMajorTenThousand = (inputValue) => {
    let chartContainer = document.querySelector('.simulatorContainer .investimentReturnChart')
    if (inputValue >= 10000) {
        document.querySelector('.instructionContainer').classList.add('hidden')
        document.querySelector('.warningChart').classList.add('hidden')
        chartContainer.classList.remove('hidden')
        return
    }
    document.querySelector('.instructionContainer').classList.remove('hidden')
    document.querySelector('.warningChart').classList.remove('hidden')
    chartContainer.classList.add('hidden')
    return

};
const changeMonthDisplay = (selectedMonthIndex, monthsList) => {
    let selectedMonth, selectedMonthId;
    switch (Number(selectedMonthIndex)) {
        case 0:
            selectedMonth = 'Jan';
            selectedMonthId = 'janMonth';
            break;
        case 1:
            selectedMonth = 'Fev';
            selectedMonthId = 'fevMonth';
            break;
        case 2:
            selectedMonth = 'Mar';
            selectedMonthId = 'marMonth';
            break;
        case 3:
            selectedMonth = 'Abr';
            selectedMonthId = 'abrMonth';
            break;
        case 4:
            selectedMonth = 'Mai';
            selectedMonthId = 'maiMonth';
            break;
        case 5:
            selectedMonth = 'Jun';
            selectedMonthId = 'junMonth';
            break;
        case 6:
            selectedMonth = 'Jul';
            selectedMonthId = 'julMonth';
            break;
        case 7:
            selectedMonth = 'Ago';
            selectedMonthId = 'agoMonth';
            break;
        case 8:
            selectedMonth = 'Set';
            selectedMonthId = 'setMonth';
            break;
        case 9:
            selectedMonth = 'Out';
            selectedMonthId = 'outMonth';
            break;
        case 10:
            selectedMonth = 'Nov';
            selectedMonthId = 'novMonth';
            break;
        case 11:
            selectedMonth = 'Dez';
            selectedMonthId = 'dezMonth';
            break;
        default:
            selectedMonth = '';
            selectedMonthId = '';
    }
    highlightSelectedMonth(selectedMonthId, monthsList)
    return selectedMonth
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

    if(selectedQuota === 'master') return quotaInformationText.innerText = 'Valores brutos. Com a PrecNet, o investidor receberá o valor bruto em sua conta bancária e deverá recolher o imposto de renda sobre o ganho de capital até o final do mês seguinte na alíquota fixa de 15%. No investimento com CDB, a instituição financeira fará a retenção do imposto de renda na fonte, de acordo com a tabela regressiva, que pode ser de 22,5% a 15%.';
    if(selectedQuota === 'irFree') return quotaInformationText.innerText = 'Este será o valor estimado que o investidor receberá em sua conta bancária. Nesta simulação, como o valor estimado a ser recebido é inferior a R$ 35 mil, o investidor será isento do pagamento de imposto de renda.'
};
const formatToOnlyNumbers = value => {
    let formattedValue = value.replace(/\D/g, '');
    formattedValue = formattedValue.replace(',', '.');

    return formattedValue;
};

let amountInvestedInput = document.querySelector("input[name='amountInvested']"),
    validityYearInputs  = document.querySelectorAll(".yearInput"),
    validityYearsLabels = document.querySelectorAll('.yearInputLabel'),
    checkBoxInputs      = document.querySelectorAll(".checkBoxInputContainer"),
    quotaTypeInputs     = document.querySelectorAll(".quotaTypeInput"),
    quotaTypeLabels     = document.querySelectorAll('.quotaTypeLabel'),
    monthOfPaymentInput = document.querySelector("input[name='monthOfPayment']"),
    quotaInformation    = document.querySelector(".quotaInformationContainer .information"),
    monthDisplay        = document.querySelector('#selectedMonth'),
    monthListNames      = document.querySelectorAll('.monthList span'),
    questionMarkIcon    = document.querySelector('.simulatorQuestionMarkIcon'),
    monthQuestionMark   = document.querySelector('.monthQuestionMarkIcon'),
    questionPopUp       = document.querySelector(".simuladorQuotaExplanationContainer"),
    monthQuestionPopup  = document.querySelector('.monthExplanationContainer'),
    validityDate        = new Date(pickCheckedRadio(validityYearInputs).value, monthOfPaymentInput.value, 31),
    workingDays         = workingDaysCalculator(new Date(), validityDate, holidays),
    validityYearValue,
    quotaTypeValue,
    monthOfPaymentValue;

monthDisplay.innerHTML = changeMonthDisplay(monthOfPaymentInput.value, monthListNames)
const startSimulation = (amountInvestedInput) => {
    let formattedInputValue = formatToOnlyNumbers(amountInvestedInput.value)
    showHiddenChartContainerIfValueIsEqualorMajorTenThousand(formattedInputValue)
    //selectQuotaOptionByAmountValue(formattedInputValue)
    validateFields(
        amountInvestedInput, 
        pickCheckedRadio(validityYearInputs), 
        pickCheckedRadio(quotaTypeInputs), 
        monthOfPaymentInput
    )
    let quotas = quotaResults(
        formattedInputValue,
        pickCheckedRadio(quotaTypeInputs).value,
        workingDays,validityDate.getFullYear()
    )
    selectQuotaOptionByAmountValue(quotas.precnetValue)

    showResultsOnScreen(
     quotas 
    )
}

const disableOrEnableQuotaAndCheck = (quotaContainer,disableOrEnable) => {
  const quota = quotaContainer.querySelector('input')
  if(disableOrEnable === 'disable') {
    quota.checked = false
    quota.disabled = true
    quotaContainer.classList.add('disabled')
    return quotaContainer.classList.remove('selected')
  }
  quota.disabled = false
  quota.checked = true
  quotaContainer.classList.add('selected')
  return quotaContainer.classList.remove('disabled')
}

const selectQuotaOptionByAmountValue = (amountValue) => {
  let irFreeQuota = document.querySelector('#irFreeQuotaContainer')
  let masterQuota = document.querySelector('#masterQuotaContainer')
  if(amountValue < 35000){
    disableOrEnableQuotaAndCheck(masterQuota, 'disable')
    disableOrEnableQuotaAndCheck(irFreeQuota, 'enable')
    return 
  }
  disableOrEnableQuotaAndCheck(irFreeQuota, 'disable')
  disableOrEnableQuotaAndCheck(masterQuota, 'enable')
}

amountInvestedInput.addEventListener('input', (e) => {
  e.preventDefault()
  amountInvestedInputMask(e)
  startSimulation(e.target)
});

validityYearsLabels.forEach(label => {
    label.addEventListener('click', () => {
        document.querySelector(`#${label.getAttribute('for')}`).click()
    })
});

quotaTypeLabels.forEach(label => {
    label.addEventListener('click', () => {
        document.querySelector(`#${label.getAttribute('for')}`).click()
    })
});

validityYearInputs.forEach(input => input.addEventListener('click', () => {
    const selectedMonth = monthOfPaymentInput.value; // Obtém o mês selecionado
    const selectedYear = pickCheckedRadio(validityYearInputs).value; // Obtém o ano selecionado
    const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate(); // Obtém o último dia do mês selecionado

    validityDate = new Date(selectedYear, selectedMonth, lastDayOfMonth); // Cria a data com o último dia do mês
    workingDays = workingDaysCalculator(new Date(), validityDate, holidays);
    highlightSelectedCheckInput(input);
    
    if (amountInvestedInput.value != undefined) {
        let results = quotaResults(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, validityDate.getFullYear(), lastDayOfMonth);
        showResultsOnScreen(results);
    }
}));


quotaTypeInputs.forEach(input => input.addEventListener('click', () => {
    if(amountInvestedInput.value != undefined) {
      let results = quotaResults(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, validityDate.getFullYear())
      showResultsOnScreen(results)
    }
    changeQuotaInformationText(pickCheckedRadio(quotaTypeInputs).value, quotaInformation)
    highlightSelectedCheckInput(input)

}))




monthOfPaymentInput.addEventListener('input', () => {
    const selectedYear = pickCheckedRadio(validityYearInputs).value; // Obtém o ano selecionado
    const selectedMonth = monthOfPaymentInput.value; // Obtém o mês selecionado
    const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate(); // Obtém o último dia do mês selecionado

    validityDate = new Date(selectedYear, selectedMonth, lastDayOfMonth); // Cria a data com o último dia do mês
    monthDisplay.innerHTML = changeMonthDisplay(selectedMonth, monthListNames); // Atualiza o display do mês
    workingDays = workingDaysCalculator(new Date(), validityDate, holidays); // Calcula os dias úteis
    if(amountInvestedInput.value != undefined) {
        let result = quotaResults(amountInvestedInput.value, pickCheckedRadio(quotaTypeInputs).value, workingDays, validityDate.getFullYear(), lastDayOfMonth);
        showResultsOnScreen(result)
    }
});

questionMarkIcon.addEventListener('mouseenter', () => {
    questionPopUp.classList.add('simulatorVisible')
})
questionMarkIcon.addEventListener('click', () => {
    questionPopUp.classList.add('simulatorVisible')
})
monthQuestionMark.addEventListener('mouseenter', () => {
  monthQuestionPopup.classList.add('simulatorVisible')
})
monthQuestionMark.addEventListener('click', () => {
  monthQuestionPopup.classList.add('simulatorVisible')
})
questionPopUp.addEventListener('mouseleave', (e) => {
    e.target.classList.remove('simulatorVisible')
})
questionPopUp.addEventListener('click', (e) => {
    e.target.classList.remove('simulatorVisible')
})

monthQuestionPopup.addEventListener('mouseleave', (e) => {
  e.target.classList.remove('simulatorVisible')
})
monthQuestionPopup.addEventListener('click', (e) => {
    e.target.classList.remove('simulatorVisible')
})
document.addEventListener('click', (e) => {
    if (!questionPopUp.contains(e.target) && !questionMarkIcon.contains(e.target)) {
        questionPopUp.classList.remove('simulatorVisible');
    }

    if (!monthQuestionPopup.contains(e.target) && !monthQuestionMark.contains(e.target)) {
      monthQuestionPopup.classList.remove('simulatorVisible');
    }
});

startSimulation(amountInvestedInput)