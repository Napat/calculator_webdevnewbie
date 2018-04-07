var displayRow = 1;

function calculate() {
    let result;
    let equation = document.calc.output.value;

    if(!equation) {
        alert("Please fill the equation!!");
        return;
    }

    try {
        result = eval(equation);
    }catch (err) {
        if (err instanceof SyntaxError, TypeError) {
            alert(err.message);
            return;
        }
        throw(err);
    }

    console.log(result);
    document.calc.output.value = result;
    displaytableAdd(equation, result);    
}

function erase() {
    document.calc.output.value = '';
}

function entries(params) {
    document.calc.output.value += params;
}

function displaytableAdd(equation, result) {
    let displaytable = document.getElementById('display');
    let newRow = displaytable.insertRow(displayRow);
    let cellEqu = newRow.insertCell(0);
    let cellRes = newRow.insertCell(1);

    cellEqu.innerHTML = equation;
    cellRes.innerHTML = result;
    displayRow++;
}