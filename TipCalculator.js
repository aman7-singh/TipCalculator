
let amountInfo = document.getElementById("amountInput");

let serviceExpreinces = ["25% - Excelent", "20% - Very Good", "15% - Good", "10% - Ok", "5% - Bad", "0% - Worse"];

let service = document.getElementById("serviceDropDown");
serviceExpreinces.forEach((s, i) =>
{
    var li = document.createElement("option");
    var text = document.createTextNode(s);
    li.appendChild(text);
    service.appendChild(li);
});

let tipStr = document.getElementById("tipH2");
function serviceExpreinceChange(ssd) {
    let amount = amountInfo.value;
    let noOfPerson = document.getElementById("numberOfPeopleInput").value;
    if (noOfPerson < 1) {
        alert("invalid number of people : " + noOfPerson)
    }
    let e = document.getElementById("serviceDropDown");
    var sel = e.options[e.selectedIndex].value;
    if (sel.includes("Excelent")) {
        tip = amount * 0.25 / noOfPerson;
    }
    else if (sel.includes("Very Good")) {
        tip = amount * 0.20 / noOfPerson;

    }
    else if (sel.includes("Good")) {
        tip = amount * 0.15 / noOfPerson;

    }
    else if (sel.includes("Ok")) {

        tip = amount * 0.10 / noOfPerson;
    }
    else if (sel.includes("Bad")) {
        tip = amount * 0.05 / noOfPerson;

    }
    else if (sel.includes("Worse")){
        tip = amount * 0.00 / noOfPerson;

    }

    tipStr.textContent = "TIP AMOUNT :  $ " + tip; 
}
