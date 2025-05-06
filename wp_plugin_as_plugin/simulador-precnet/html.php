<style>
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');

:root{
    --buttonColor:#25D366;
    --buttonHover:#075E54;
    --darkGreen:#2D6218;
    --checkBoxGreen:#54AA54;
    --blue:#04265E;
    --borderBlue:#066CBB;
    
}


.simulatorQuestionMarkIcon{
    width:20px;
    fill:#04265E;
}
.infoPopup{
    position:absolute;
    
    background-color:#FFF;
    box-shadow:0 0 2px rgba(0,0,0,.5);
    
    border-radius:25px;
    border:1px solid #444;
    
    padding:1.5em;
    width:90%;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    
    opacity:0;
    visibility: hidden;
    z-index:2;
}
.rightCol .infoPopup{
  max-width:600px;
}
.simulatorVisible{
    opacity:1;
    visibility:visible;
}
.simulatorContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x:hidden;
    color: #213E85;
    background: linear-gradient(to bottom , #FFF, #E5E5E5);
    border-radius: 25px;
    border:1px solid #E5E5E5;
    padding: 1em;
}

#simulatorContainer label{
    line-height:1;
    color:#213E85;
    
}
.simulatorHeader{

    padding:40px 32px 0;
    width:100%;
}
.simulatorTitleContainer{
    border-bottom:3px solid #54AA54;
    width:99.8%;
}
.simulatorTitle{
    font-size:40px;
    text-align:left;
    font-weight:700;
    margin-bottom:15px;
}

#simulatorContainer .simulatorBody{
    padding:20px;
    min-height:250px;
    height:100%;
    width:100%;
}

.precnetText{
    background-color: #213E85;
    border-radius: 45px;
    padding: 5px 5px;
    width:120px;
    min-width:120px;
    max-width:120px;
    text-align:center;
    font-weight: bold;
}


.lcilcaText{
    background-color: #90d55e;
    border-radius: 45px;
    padding: 5px;
    font-weight: bold;
    width:120px;
    min-width:120px;
    max-width:120px;
    text-align:center;

}
    
.lciLcaValue{
    margin-left: 10px;

}
.cdbText{
    background-color: #90d55e;
    border-radius: 45px;
    z-index: 1;
    padding: 5px;
    font-weight: bold;
    width:120px;
    min-width:120px;
    max-width:120px;
    text-align:center;
    
}

.cdbValue{
    margin-left: 10px;
}
   

.precnetValue{
    margin-left: 10px;
}


#simulatorContainer .hidden{
    display:none!important;
    visibility:hidden;
    
}

#simulatorContainer .disabled, #simulatorContainer .disabled div{
  color:#000!important;
  border:1px solid #222!important;
}
#simulatorContainer .disabled label{
  color:#000!important;
}
#simulatorContainer .disabled input[type="radio"] + label::before,
#simulatorContainer .disabled input[type="checkbox"] + label::before {
   background-color: #999;
   border: 1px solid #eee;
}
#simulatorContainer .paymentMonth{
    height:184px;
    min-height:fit-content;
}

#simulatorContainer input[type='radio']{
    width:16px;
}
#simulatorContainer .row{
    display:flex;
    margin:0 0 0 0;
}

#simulatorContainer .col{
    flex-direction:column;
    padding:12px 12px 0;
}

#simulatorContainer .col50{
    width:50%;
}

#simulatorContainer .col100{
    width:100%;
}

#simulatorContainer .monthListContainer{
    width:100%;
    display:flex;
}
#simulatorContainer .monthList{
    width:92%;
    display:flex;
    justify-content:space-between;
    margin:5px 0;
}

#simulatorContainer .topMonthList{
    text-align:left;
    justify-content:flex-start;
}
#simulatorContainer .bottomMonthList{
    text-align:right;
    justify-content:flex-end;
}
#simulatorContainer .topMonthList span{
    margin-right:0;
}
#simulatorContainer .bottomMonthList span{
    margin-left:0;
}
#simulatorContainer .rightCol{
    display:flex;
}

.monthPaymentAndList{
    border: 1.5px solid #90d55e;
    border-radius: 10px;
    padding: 3% 35px;
    width: 100%;
 
}

#simulatorContainer .userInputData{
    margin-bottom:28px;
    display:flex;
    flex-direction:column;
}
#simulatorContainer .userInputData label{
    margin-right:12px;
}
#simulatorContainer .inputIdentifier{
    margin-right:8px;
    margin-bottom:10px;
    font-weight:700;
    font-size:24px;
}
#simulatorContainer .chartContainer{
    
    height:184px;
    margin-top:24px;
}


#simulatorContainer .chart {
    color:#fff;
    border: 1.5px solid #90d55e;
    border-radius: 10px;
    padding: 1.5%;
    
}
#simulatorContainer .warningChart {
    color:#000;
    padding:1em;
}


#simulatorContainer .amountInvestedContainer{
    border: 1.5px solid #90d55e;
    border-radius: 10px;
    padding: 25px 15px;
    width:93%;

}
#simulatorContainer .moneySimbolAndAmountInvestedInputContainer{
    border-bottom: 3px solid #54AA54;
}

.bar {
    display:flex;
    align-items:center;
    width:fit-content;
    height: 100%;
    flex-grow: 1;
    transition: width 0.5s ease;
    margin: 12px 0;
    border-radius: 20px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.1); /* Adicionando um tom de cinza claro */
    overflow: hidden; /* Para ocultar o texto que se estende além da barra */
}

.bar .value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #333; /* Mudando a cor do texto para um tom mais escuro */
    font-size: 12px; /* Ajustando o tamanho da fonte */
    font-weight: bold; /* Deixando o texto em negrito */
    white-space: nowrap; /* Impedindo que o texto quebre em várias linhas */
    padding: 2px 6px; /* Adicionando um espaçamento interno */
    background-color: rgba(255, 255, 255, 0.8); /* Adicionando um fundo branco translúcido */
    border-radius: 10px; /* Arredondando as bordas do texto */
}

.quotaInformationContainer{
    text-align:center;
    margin-top:0px;
    padding:0 80px;
    width:100%;
}
#simulatorContainer .informationSimbol{
    color:#0495EC;
    font-size:12px;
}
#simulatorContainer .information{
    font-size:12px;
    font-weight:400;
}
#precnet {
    height: 30px;
    background-color: #7B90B6;
}

#cdb {
    
    height: 30px;
    background-color: #9EC99E;
}

#lci-lca {
    
    height: 30px;
    background-color: #9EC99E;
}

#simulatorContainer .chartQuotaValue{
    white-space:nowrap;
    font-size:22px;
}
#simulatorContainer #moneySimbol{
    font-size:28px;
    font-weight:700;
}
#amountInvested{
    border:unset;
    color: #213E85;
    background-color: unset;
    padding:6px 12px;
    outline: none;
    font-size:28px;
    width:85%;
}


#simulatorContainer .inputAndLabelContainer{
    border: 2px solid #213E85;
    border-radius: 50px;
    padding: 7px 10px;
    margin-right: 25px;
    display:flex;
    flex-wrap:nowrap;
}

.inputAndLabelContainerSelected{

    border: 1px solid #54AA54;
    
}

#simulatorContainer .validityYear .inputAndLabelContainer{
    width:30%;
    display:flex;
    margin-right:35px;
    justify-content:center;
    align-items:center;
    text-align:center;
}
#simulatorContainer .quotaType .inputAndLabelContainer{
    width:45%;
    display:flex;
    margin-right:35px;
    justify-content:center;
    align-items:center;
    text-align:center;
}
#simulatorContainer .inputAndLabelContainer label{
    text-align:center;
    font-size:20px;
}

#simulatorContainer .inputAndLabelContainer input{
    margin-right:5px;
}


#simulatorContainer .inputContainer{
    display:flex;
}
#simulatorContainer .instructionContainer{
    width:100%;
    margin-top:24px;
}
#simulatorContainer .monthContainer span{
  font-weight:700;

}
#simulatorContainer .monthContainer{
    margin-bottom:12px;
    display:flex;
    flex-direction:column;
}
#simulatorContainer .selectedMonthContainer{
    display:none;
    visibility:hidden;
}

#simulatorContainer .validityYearText{
    font-size:16px;
    font-weight:400;
    color:#54AA54;
}

#simulatorContainer .selected {
    border: 2px solid #54AA54;
}

#simulatorContainer .textGreen{
    color: #54AA54;
}

#simulatorContainer .bold {
    font-weight: bold;
}

#simulatorContainer input[type="range"] {
    /* Remove estilos padrão */
    -webkit-appearance: none;
    -moz-apperance: none;
    appearance: none;
    background-color: #213E85; /* Cor de fundo cinza */
    border-radius: 10px;
    /* Thumb (alça) */
    cursor: pointer;
  }

#simulatorContainer input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    /* Dimensões e layout */

    background-color: #04265E; /* Cor da bola */
    border-radius: 50%; /* Forma circular */
}

#simulatorContainer input[type="range"]::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    /* Dimensões e layout */

    background-color: #04265E; /* Cor da bola */
    border-radius: 50%; /* Forma circular */
}

#monthOfPayment{
    width: 100%;
    height: 5px;
    margin-top:12px;
    
}

#monthOfPayment::-webkit-slider-thumb{
    background: #54AA54!important;
    box-shadow: 0 0 10px 3px  #54AA54;
    height: 15px;
    width: 15px;
}
#simulatorContainer .monthOfPaymentTitle{
    margin-bottom:0px;
}

#simulatorContainer input[type="radio"],
#simulatorContainer input[type="checkbox"] {
    position: absolute;
    left: -999em;
}

#simulatorContainer input[type="radio"] + label,
#simulatorContainer input[type="checkbox"] + label {
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

#simulatorContainer input[type="radio"] + label::before,
#simulatorContainer input[type="checkbox"] + label::before {
   content: "";
   display: inline-block;
   vertical-align: -20%;
   height: 2ex;
   width: 2ex;
   background-color: white;
   border: 1px solid #213E85;
   border-radius: 4px;
   box-shadow: inset 0 2px 5px rgba(0,0,0,0.25);
   margin-right: 0.5em;
}

#simulatorContainer input[type="radio"]:checked + label::before {
   background: radial-gradient(circle at center, #54AA54 .9ex, #fff 1ex);
}

#simulatorContainer input[type="radio"] + label::before {
   border-radius: 50%;
}

#simulatorContainer input[type="checkbox"]:checked + label::after {
   content: '';
   position: absolute;
   width: 1.2ex;
   height: 0.4ex;
   background: rgba(0, 0, 0, 0);
   top: 0.9ex;
   left: 0.4ex;
   border: 3px solid #1062a4;
   border-top: none;
   border-right: none;
   -webkit-transform: rotate(-45deg);
   -moz-transform: rotate(-45deg);
   -o-transform: rotate(-45deg);
   -ms-transform: rotate(-45deg);
   transform: rotate(-45deg);
}

@media(max-width:1045px){
    #simulatorContainer .row{
        flex-direction:column;
    }

    #simulatorContainer .col{
        width:100%;
    }

    #simulatorContainer .inputAndLabelContainer{
        margin-bottom:12px;
    }
    #simulatorContainer .validityYear .inputAndLabelContainer{
        max-width:150px;
        width:100%;
    }
    #simulatorContainer .quotaType .inputAndLabelContainer{
        max-width:250px;
        width:100%;

    }
    #simulatorContainer .chartQuotaValue{
        font-size:18px;
    }
    #simulatorContainer .paymentMonth{
        height:fit-content;
    }
}

#simulatorContainer .firstRow{
  display:flex;
  flex-direction:row;
}
#simulatorContainer .validityYear, #simulatorContainer .amountInvested{
  width:50%;
}

@media(max-width:768px){
  #simulatorContainer .firstRow{
    display:flex;
    flex-direction:column;
  }
  #simulatorContainer .validityYear, #simulatorContainer .amountInvested{
    width:100%;
  }
    #simulatorContainer .chartQuotaValue{
        font-size:16px;
    }
}

@media(max-width:667px){
    .simulatorContainer{
        padding:0.2em;
    }
    #simulatorContainer .simulatorHeader{
        padding:20px 22px 0;
    }
    #simulatorContainer .simulatorTitle{
        font-size:20px;
    }
    #simulatorContainer .simulatorBody{
        padding:10px;
    }

    #simulatorContainer .validityYear .inputAndLabelContainer{
        max-width:100px;    
        margin-right:12px;
    }
    #simulatorContainer .quotaTypeInputContainer .inputAndLabelContainer{
        max-width:160px;   
        margin-right:12px;     
    }
    #simulatorContainer .validityYearText{
        display:block;
    }
    #simulatorContainer #moneySimbol{
        font-size:16px;
    }
    #simulatorContainer #amountInvested{
        width:84%;
        font-size:18px;
    }
    #simulatorContainer .monthRowContainer{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    #simulatorContainer .monthContainer{
        width:80%;
    }
    #simulatorContainer .monthList{
        font-size:8px;
        color:#213E85;
        display:none;
        visibility:hidden;
    }
    #simulatorContainer .selectedMonthContainer{
        display:inline-block;
        visibility:visible;
    }
    #simulatorContainer #selectedMonth{
        color:#90d55e;
        font-weight:bold;
    }
    #simulatorContainer .monthOfPaymentTitle{
        font-size:16px;
    }
    #simulatorContainer .inputIdentifier{
        font-size:16px;
    }
    #simulatorContainer .rentabilityTitle{
        font-size:18px;
    }
    #simulatorContainer .quotaInformationContainer{
        padding:0;
    }
    #simulatorContainer .precnetText, #simulatorContainer .cdbText, #simulatorContainer .lcilcaText{
        width:95px;
        min-width:95px;
        max-width:95px;
        padding:2% 0;
    }
    #simulatorContainer .chart{
        font-size:14px;
    }
    #simulatorCOntainer .chartQuotaValue{
        font-size:12px;
    }
    #simulatorContainer .chart #precnet{
        width:100%!important;
    }
    #simulatorContainer .chart .bar{
        width:97%!important;
    }
    #simulatorContainer .chart .bar{
        width:97%!important;
    }
    #simulatorContainer .amountInvestedContainer{
        padding:3% 35px;
    }
    #simulatorContainer .col{
        padding:5px 12px;
    }
    #simulatorContainer .chartContainer{
        height:fit-content;
    }
    #simulatorContainer .inputAndLabelContainer label{
        font-size:14px;
    }
    #simulatorContainer .userInputData {
        margin-bottom:5px;
    }
    
}

@media(max-width:430px){
    #simulatorContainer .inputAndLabelContainer label{
        font-size:10px;
    }
}
@media(max-width:356px){
    .simulatorContainer{
        padding:2px;
    }
    #simulatorContainer .simulatorHeader{
        padding:15px 10px 0;
    }
    #simulatorContainer .simulatorBody{
        padding:0px;
    }
    #simulatorContainer #moneySimbol{
        font-size:16px;
    }
    #simulatorContainer #amountInvested{
        width:80%;
        font-size:16px;
    }
    #simulatorContainer .quotaInformationContainer{
        padding:15px 5px;
    }
    #simulatorContainer .validityYear .inputAndLabelContainer, #simulatorContainer .quotaType .inputAndLabelContainer{
        width:100%;
        max-width:100%;
        margin-right:0;
    }
    #simulatorContainer .chartQuotaValue{
        font-size:10px;
    }
    #simulatorContainer .inputContainer{
        flex-direction:column;
    }
    #simulatorContainer .amountInvestedContainer{
        padding:15px;
    }
    #simulatorContainer .infoPopup{
        font-size:12px;
    }
}
    
</style>
<div id='simulatorContainer' class="simulatorContainer simulator">
      <div class="simulatorHeader">
          <div class="simulatorTitleContainer">
              <div class="simulatorTitle">Simulador</div>
          </div>
      </div>
      <div class="simulatorBody">
          <div class="row">
              <div class="col col50 leftUserInputContainer firstRow">
                  <div class="validityYear validityYearInputContainer userInputData checkBoxInputContainer">
                      <span class="inputIdentifier inputTitle"
                      >Vencimento do ativo: </span>
                      <div class="inputContainer">
                          <!-- 
                          <div class="inputAndLabelContainer selected">
                              <input type="radio" name="year" class='yearInput' id="year2025" value="2025" checked>
                              <label for='year2025' class="bold yearLabel" data-value="2025">2025</label>
                          </div> 
                          -->
                          <div class="inputAndLabelContainer selected">
                              <input type="radio" name="year" class='yearInput' id="year2026" value="2026" checked>
                              <label for="year2026" class="yearLabel" data-value="2026">2026</label>
                          </div>
                      </div>
                  </div>
                  <div class="quotaType quotaTypeInputContainer userInputData checkBoxInputContainer hidden">
                      <span class="inputIdentifier">Modalidades
                          <svg aria-hidden="true" class="simulatorQuestionMarkIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
                          </svg>
                      </span>
                      <div class="simuladorQuotaExplanationContainer infoPopup">
                        <p>Cada precatório é dividido em tantas Cotas IR Free de modo que o valor futuro de liquidação do investimento em 1 Cota IR Free seja inferior a R$ 35 mil e, portanto, isento de imposto de renda. Aportes a partir de R$ 25 mil em cotas de um precatório recebem upgrade de rentabilidade automático para a Opção Master, independente do valor de resgate previsto.</p>
                      </div>
                      <div class="inputContainer">
                          <div class="inputAndLabelContainer selected" id='masterQuotaContainer'>
                              <input type="radio" name="quotaType" class='quotaTypeInput' id="masterQuota" value="master" >
                              <label for='masterQuota' class="bold quotaTypeLabel" data-value="master">Opção Master</label>
                          </div>
                          <div class="inputAndLabelContainer" id='irFreeQuotaContainer'>
                              <input type="radio" name="quotaType" class='quotaTypeInput' id="irFreeQuota" value='irFree' checked>
                              <label for="irFreeQuota" class="quotaTypeLabel" data-value="irFree">Cota IR Free</label>
                          </div>
                        <!-- 
                          <div class="inputAndLabelContainer">
                              <input type="radio" name="quotaType" class='quotaTypeInput' id="fitQuota"    value='fit'>
                              <label for="fitQuota" class='quotaTypeLabel' data-value="fit">Fit</label>
                          </div>
                          -->
                      </div>
                  </div>
                  <div class="amountInvested userInputData">
                      <span class="inputIdentifier">Valor investido:</span>
                      <div class="amountInvestedContainer">
                          <div class="moneySimbolAndAmountInvestedInputContainer">
                              <span id='moneySimbol'>R$ </span>
                              <input type="text" name="amountInvested" id="amountInvested" placeholder="100.000,00" value='10.000'>
                          </div>
                      </div>
                      <div class="instructionContainer">
                          <span class="instruction">Insira um valor de no mínimo R$ 10.000 para realizar sua simulação</span>
                      </div>
                      
                  </div>
              </div>
              <div class="col col50 rightCol ">
                  <div class="paymentMonth">
                      <div class="monthRowContainer">
                          <div class="monthContainer">
                              <span class="monthOfPaymentTitle inputIdentifier">Mês de pagamento
                                <svg aria-hidden="true" class="simulatorQuestionMarkIcon monthQuestionMarkIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
                                </svg>
                              </span>
                              <div class="monthExplanationContainer infoPopup">
                                <p>A regra estabelecida na Constituição Federal determina o ano, mas não o mês de pagamento, sendo uma escolha do governo.</p>
                              </div>
                              <small class="validityYearText">(Ano de vencimento)</small>    
                          </div>
                          <div class="selectedMonthContainer">
                              <span id="selectedMonth"></span>
                          </div>
                      </div>
                      <div class="monthPaymentAndList">
                          <div class="monthListContainer topMonthList">
                              <div class="monthList ">
                                  <span class="month" id="janMonth">Jan</span>
                                  <span class="month" id="marMonth">Mar</span>
                                  <span class="month" id="maiMonth">Mai</span>
                                  <span class="month" id="julMonth">Jul</span>
                                  <span class="month" id="setMonth">Set</span>
                                  <span class="month" id="novMonth">Nov</span>
                              </div>
                          </div>
                          <input type="range" name="monthOfPayment" id="monthOfPayment" min='0' max="11" value="11">
                          <div class="monthListContainer bottomMonthList">
                              <div class="monthList ">
                                  <span id="fevMonth">Fev</span>
                                  <span id="abrMonth">Abr</span>
                                  <span id="junMonth">Jun</span>
                                  <span id="agoMonth">Ago</span>
                                  <span id="outMonth">Out</span>
                                  <span id="dezMonth">Dez</span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="chartContainer">
                      <p class='rentabilityTitle inputIdentifier'>Previsão de resgate</p>
                      <p class='chart warningChart'>⚠️ Insira um valor de, no mínimo, R$ 10.000 para iniciar a simulação</p>
                      <div class="chart investimentReturnChart">
                          <div class="bar" id="precnet">
                              <span class="precnetText"> PrecNet </span>
                              <span class="precnetValue chartQuotaValue" id="precnetValue"></span>

                          </div>
                          <div class="bar" id="cdb">
                              <span class="cdbText"> CDB </span>
                              <span class="cdbValue chartQuotaValue" id="cdbValue"></span>
                          </div>
                          <div class="bar" id="lci-lca">
                              <span class="lcilcaText"> LCI/LCA </span>
                              <span class="lciLcaValue chartQuotaValue" id="lciLcaValue"></span>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          <div class="row">
              <div class="quotaInformationContainer">
                  <span class="informationSimbol">*</span>
                  <small class="information"> Valores brutos. Com a PrecNet, o investidor receberá o valor bruto em sua conta bancária e deverá recolher o imposto de renda sobre o ganho de capital até o final do mês seguinte na alíquota fixa de 15%. No investimento com CDB, a instituição financeira fará a retenção do imposto de renda na fonte, de acordo com a tabela regressiva, que pode ser de 22,5% a 15%.</small>
              </div>
          </div>
          <div class="row">
              <div class="quotaInformationContainer">
                  <span class="informationSimbol">*</span>
                  <small class="informationSimulation">A simulação é meramente estimativa e não constitui garantia por parte da PrecNet.</small>
              </div>
          </div>
      </div>
  </div>
<script defer>
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
          currentYearOptionChosen: 0.075119,
          nextYearOptionChosen: 0.071262,
          afterNextYearOptionChosen: 0.071262
      },
      cdb: {
          currentYearOptionChosen: 0.054112,
          nextYearOptionChosen: 0.050256,
          afterNextYearOptionChosen: 0.050256
      },
      irFree: {
          currentYearOptionChosen: 0.075119,
          nextYearOptionChosen: 0.071262,
          afterNextYearOptionChosen: 0.071262
      },
      lciLca: {
          currentYearOptionChosen: 0.045763,
          nextYearOptionChosen: 0.041907,
          afterNextYearOptionChosen: 0.041907
      },
      fit: {
          currentYearOptionChosen: fixedFitQuota.nextYearOptionChosen,
          nextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen,
          afterNextYearOptionChosen: fixedFitQuota.afterNextYearOptionChosen
      }
  },
  nextYearRentabilityOn: {
      master: {
          nextYearOptionChosen: 0.075119,
          afterNextOptionYearChosen: 0.071262
      },
      cdb: {
          nextYearOptionChosen: 0.050256,
          afterNextOptionYearChosen: 0.050256
      },
      irFree: {
          nextYearOptionChosen: 0.071262,
          afterNextOptionYearChosen: 0.071262
      },
      lciLca: {
          nextYearOptionChosen: 0.041907,
          afterNextOptionYearChosen: 0.041907
      },
      fit: {
          nextYearOptionChosen: fixedFitQuota.nextYearOptionChosen,
          afterNextOptionYearChosen: fixedFitQuota.nextYearOptionChosen
      }
  },
  afterNextYearRentabilityOn: {
      master: {
          currentYearOptionChosen: 0.075119,
          nextYearOptionChosen: 0.071262,
          afterNextYearOptionChosen: 0.071262
      },
      cdb: {
          currentYearOptionChosen: 0.054112,
          nextYearOptionChosen: 0.050256,
          afterNextYearOptionChosen: 0.050256
      },
      irFree: {
          currentYearOptionChosen: 0.075119,
          nextYearOptionChosen: 0.071262,
          afterNextYearOptionChosen: 0.071262
      },
      lciLca: {
          currentYearOptionChosen: 0.045763,
          nextYearOptionChosen: 0.041907,
          afterNextYearOptionChosen: 0.041907
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
</script>