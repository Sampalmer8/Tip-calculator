

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

    let tipPercentage = +document.getElementById("tipPercent").value;
    let mealCost = +document.getElementById("mealCost").value;

    let totalTip = tipPercentage / 100 * mealCost;
    document.getElementById("output").innerHTML = totalTip.toFixed(2);
}