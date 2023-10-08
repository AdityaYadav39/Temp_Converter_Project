let CelsiusInput = document.querySelector('#Celsius > input')
let FahrenhietInput = document.querySelector('#Fahrenheit > input')
let KelvinInput = document.querySelector('#Kelvin > input')

let button =document.querySelector('.btn')

function roundnum(number){
    return Math.round(number*100)/100
}

CelsiusInput.addEventListener('input',function(){
    let ctemp = parseFloat(CelsiusInput.value);
    let ftemp = (ctemp*(9/5)) + 32
    let ktemp = (ctemp + 273.15)

    FahrenhietInput.value = roundnum(ftemp);
    KelvinInput.value = roundnum(ktemp);
})

FahrenhietInput.addEventListener('input',function(){
    let ftemp = parseFloat(FahrenhietInput.value);
    let ctemp = (ftemp - 32) * (5/9)
    let ktemp = (ftemp - 32) * (5/9) + 273.15

    CelsiusInput.value = roundnum(ctemp);
    KelvinInput.value = roundnum(ktemp);
})

KelvinInput.addEventListener('input',function(){
    let ktemp = parseFloat(KelvinInput.value);
    let ftemp = (ktemp-273.15) * (9/5)+ 32
    let ctemp = (ktemp - 273.15)

    FahrenhietInput.value = roundnum(ftemp);
    CelsiusInput.value = roundnum(ctemp);
})

button.addEventListener('click',function(){
    CelsiusInput.value = "";
    FahrenhietInput.value = "";
    KelvinInput.value = "";
})
