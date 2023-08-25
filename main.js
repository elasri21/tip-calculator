const billField = document.getElementById("bill-field");
const tips = Array.from(document.querySelectorAll(".tips span"));
const custom = document.querySelector(".custom");
const numOfPeople = document.querySelector("#num-of-people");
const tipAmount = document.querySelector(".tip-1");
const totalAmount = document.querySelector(".total-1");
const reset = document.querySelector(".reset");
const calcule = document.querySelector(".calcule");

calcule.addEventListener("click", function(e) {
    if (billField.value =="") {
        return;
    }
    
    let theBill = parseFloat(billField.value);
    let people = parseInt(numOfPeople.value);
    tips.filter(tip => tip.addEventListener("click", function(e) {
        e.target;
    }));
    theTip = (parseInt(tips[0].dataset.per) * theBill) / 100;
    if (custom.value == "") {
        tipAmount.textContent = theTip * people;
        totalAmount.textContent = (theTip * people) + theBill
    } else {
        tipAmount.textContent = (parseFloat(custom.value)) * people;
        totalAmount.textContent = ((parseFloat(custom.value)) * people) + theBill
    }
    billField.value = "";
    custom.value = "";
    numOfPeople.value = "";
});

reset.addEventListener("click", function() {
    //window.location.reload();
    billField.value = "";
    custom.value = "";
    numOfPeople.value = "";
    tipAmount.textContent = "0.00";
    totalAmount.textContent = "0.00";
});


