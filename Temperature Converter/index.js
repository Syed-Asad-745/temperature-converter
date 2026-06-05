const entryBox = document.getElementById("entryBox");

const CtoF = document.getElementById("CtoF");
const FtoC = document.getElementById("FtoC");

const CtoK = document.getElementById("CtoK");
const KtoC = document.getElementById("KtoC");

const FtoK = document.getElementById("FtoK");
const KtoF = document.getElementById("KtoF");

const result = document.getElementById("result");


function convert(){
    if(isNaN(parseFloat(entryBox.value))){
        result.textContent = "Enter numbers only!";
    }
    else{
        if(CtoF.checked){
            temp = Math.round((parseFloat(entryBox.value) * 9 / 5 + 32) * 100) / 100;
            result.textContent = temp + " °F";
        }
        else if(FtoC.checked){
            temp = Math.round(((parseFloat(entryBox.value) -32) * 5 / 9) * 100) / 100;
            result.textContent = temp + " °C";
        }
        else if(CtoK.checked){
            temp = Math.round((parseFloat(entryBox.value) + 273.15) * 100) / 100;
            result.textContent = temp + " °K";
        }
        else if(KtoC.checked){
            temp = Math.round((parseFloat(entryBox.value) - 273.15) * 100) / 100;
            result.textContent = temp + " °C";
        }
        else if(FtoK.checked){
            temp = Math.round(((parseFloat(entryBox.value) - 32) * 5 / 9 + 273.15) * 100) / 100;
            result.textContent = temp + " °K";
        }
        else if(KtoF.checked){
            temp = Math.round(((parseFloat(entryBox.value) - 273.15) * 9 / 5 + 32) * 100) / 100;
            result.textContent = temp + " °F";
        }
    }
}

CtoF.addEventListener("change", function(){
    number_value = parseFloat(entryBox.value)
    entryBox.value = number_value + " °C";
});

FtoC.addEventListener("change", function(){
    number_value = parseFloat(entryBox.value)
    entryBox.value = number_value + " °F";
});

CtoK.addEventListener("change", function(){
    number_value = parseFloat(entryBox.value)
    entryBox.value = number_value + " °C";
});

KtoC.addEventListener("change", function(){
    number_value = parseFloat(entryBox.value)
    entryBox.value = number_value + " °K";
});

FtoK.addEventListener("change", function(){
    number_value = parseFloat(entryBox.value)
    entryBox.value = number_value + " °F";
});

KtoF.addEventListener("change", function(){
    number_value = parseFloat(entryBox.value)
    entryBox.value = number_value + " °K";
});