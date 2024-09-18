document.getElementById("submit").onclick = function () {
    const number1 = parseInt(document.getElementById("numberOne").value);
    const number2 =  parseInt(document.getElementById("numberTwo").value);
    const operation = document.getElementById("selector").value;
    const span = document.getElementById("result");

    switch (operation) {
        case "sum":
            span.textContent = (number1 + number2);
            break;
        case "rest":
            span.textContent = (number1 - number2);
            break;
        case "mult":
            span.textContent = (number1 * number2);
            break;
        case "div":
            span.textContent = (number1 / number2);
            break;
        default:
            alert("La operación que escogio no es valida");
            break;
    }
}