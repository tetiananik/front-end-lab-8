var eur = prompt("Amount of euros");
var usd = prompt("Amount of dollars");
var ExRateEurToUah = 33.23;
var ExRateUsdToUah = 27.12;
eur = Number(eur);
usd = Number(usd);
var eurToUah = eur*ExRateEurToUah ;
var usdToUah = usd*ExRateUsdToUah;
var eurToUsd = ExRateEurToUah/ExRateUsdToUah;

console.log (eur + " euros are equal " + Math.round(eurToUah*100)/100 + " UAH, " + usd + " dollars are equal " + Math.round(usdToUah*100)/100 + " UAH, " + eur + " euro is equal " + Math.round(eurToUsd*100)/100  + " dollars.");
