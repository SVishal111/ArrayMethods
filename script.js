// let input = document.getElementById("inputArea").value;
// let result = document.getElementById("resultArea").value;

var array = [];

function pushFn() {
    let input = document.getElementById("inputArea").value;

    // array += input.value;
    array.push(input);
    document.getElementById("resultArea").value = "["+array+"]";

    document.getElementById("inputArea").value = "";
}

function popFn() {
    array.pop();
    document.getElementById("resultArea").value = "["+array+"]";

    document.getElementById("inputArea").value = "";
}

function delFn() {
    let indexVal = prompt("Enter the Desired Index Value of the Value to Be Deleted: ")
    delete array[indexVal];
    document.getElementById("resultArea").value = "["+array+"]";

    document.getElementById("inputArea").value = "";
}

// function emptyFn() {
//     len = array.length;
//     for(let i=0; i<=len; i++) {
//         array.pop()
//     }
//     document.getElementById("resultArea").value = "["+array+"]";

//     document.getElementById("inputArea").value = "";
// }

function sliceFn() {
    let startVal = prompt("Enter the Starting Index Value: ")
    let endVal = prompt("Enter the Ending Index Value: ")

    newArray = array.slice(startVal, endVal);

    document.getElementById("resultArea").value = "["+newArray+"]";
}

function concatFn() {
    let array2 = [];
    let array3 = [];
    let input = document.getElementById("inputArea").value;
    let arr2Lim = parseInt(prompt("Enter the Number of Elements to Be Added: "));
    for(let i=0; i<arr2Lim; i++) {
        let inputElem = prompt("Enter the Element Value: ");
        array2.push(inputElem);
    }

    array3 = array.concat(array2);
    document.getElementById("resultArea").value = "["+array3+"]";

    array = array3;
    document.getElementById("inputArea").value = "";
}
  

function filterFn() {
    let input = document.getElementById("inputArea").value;

    let lessNumVal = parseInt(prompt("Enter the Value of Lesser than to Be Found: "))
    let lessNum = array.filter(check);

    function check(num) {
        return num<lessNumVal;
    }
    
    document.getElementById("resultArea").value = lessNum;

    document.getElementById("inputArea").value = "";
}

function findFn() {
    let input = document.getElementById("inputArea").value;

    let findingVal = prompt("Enter the Value to Be Found: ")
    let findnum = array.find(findn);

    function findn(numb) {
        return "["+findingVal+"]";
    }

    document.getElementById("resultArea").value = "["+findingVal+"]"+":"+array.indexOf(findingVal)+"th Index Position";

    document.getElementById("inputArea").value = "";
}

function sortFn() {
    let input = document.getElementById("inputArea").value;

    array.sort();  //Works For Strings and Single Digit Numbers but not Multiple Digit Numbers
    // array.sort(function(a,b){return a-b});  //Works for All Digit Numbers but not Strings and Characters
    document.getElementById("resultArea").value = "["+array+"]";

    document.getElementById("inputArea").value = "";
}

function reverseFn() {
    let input = document.getElementById("inputArea").value;

    array.reverse();
    document.getElementById("resultArea").value = "["+array+"]";

    document.getElementById("inputArea").value = "";
}

function shiftFn() {
    let input = document.getElementById("inputArea").value;

    array.shift();
    document.getElementById("resultArea").value = "["+array+"]";

    document.getElementById("inputArea").value = "";
}

function unShiftFn() {
    let input = document.getElementById("inputArea").value;

    array.unshift(input);
    document.getElementById("resultArea").value = "["+array+"]";

    document.getElementById("inputArea").value = "";
}

function spliceFn() {
    let input = document.getElementById("inputArea").value;

    let indexVal = parseInt(prompt("Enter the Destined Index Value: "));
    let elmCount = parseInt(prompt("Enter The Number of Elements to be Removed: "));
    array.splice(indexVal, elmCount, input);
    document.getElementById("resultArea").value = "["+array+"]";

    document.getElementById("inputArea").value = "";
}
