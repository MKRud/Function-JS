var a = true;

while(a == true){

    var intFirst = +prompt("Input first namber", '');
    var intSecond = +prompt("Input second number", '');


    if(isNaN(intFirst) || (isNaN(intSecond))){
    alert('Please input number');

}   else{
    a = false}
};

function declaration(intFirst = 0, intSecond = 0){
    if (intFirst === 0){
        alert("Declaration - " + arguments[1]);
    }
    else if (intSecond === 0){
        alert("Declaration - " + arguments[0]);
    }
    else{
        alert(("Declaration - " + (intFirst + ' + ' + intSecond) + ' = ') + (intFirst + intSecond))
    }

}

var expression = function(intFirst = 0, intSecond = 0){
    if (intFirst === 0){
        alert("Expression - " + arguments[1]);
    }
    else if (intSecond === 0){
        alert("Expression - " + arguments[0]);
    }
    else{
        alert(("Expression - " + (intFirst + ' + ' + intSecond) + ' = ') + (intFirst + intSecond))
    }
}

declaration(intFirst, intSecond);
expression(intFirst, intSecond);