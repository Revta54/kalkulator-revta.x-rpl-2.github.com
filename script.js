let value1 = parseInt (prompt("Numbers to-1"));
let value2 = parseInt (prompt("Numbers to-2"));
let operator = prompt ("Operator (must be +,-,*,/,%,^,");
let result;

if (operator == "+"){
    result = value1 + value2;
}   else if (operator == "-"){
    result = value1 - value2;
}   else if (operator == "*"){
    result = value1 * value2;
}   else if (operator == "/"){
    result = value1 / value2;
}   else if (operator == "%"){
    result = value1 % value2;
}   else if (operator == "^"){
    result = value1 ** value2;
}   else {
    result = "invalid operator or number|";
}

document.write(result);

