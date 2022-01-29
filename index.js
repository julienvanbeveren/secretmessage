let codeMessage = document.getElementById("CodeMessage")
let decodeMessage = document.getElementById("DecodeMessage")

let zero = 8206;
let one = 10240;


codeMessage.addEventListener("submit", e => {
    e.preventDefault()
    
    let textMessage = document.getElementById("Message").value;
    let binaryString = "";
    let finalMessage = "";
    for (var i = 0; i < textMessage.length; i++) {
        binaryString += textMessage[i].charCodeAt(0).toString(2) + " ";
    }
    for (var i = 0; i < binaryString.length; i++) {
        for (var j = 0; j < binaryString[i].length; j++) {
            if (binaryString[i][j] == "0") {
                finalMessage = finalMessage + String.fromCharCode(zero);
            }
            else if (binaryString[i][j] == "1") {
                finalMessage = finalMessage + String.fromCharCode(one);
            }
        }
    }
    navigator.clipboard.writeText(finalMessage);

})

decodeMessage.addEventListener("submit", e => {
    e.preventDefault();

    let textMessage = document.getElementById("InvisMessage").value;
    let fakeBinaryArray = [];
    let finalMessage = "";
    for (let i = 0; i < textMessage.length; i++) {
        fakeBinaryArray.push(textMessage[i].charCodeAt(0));
    }
    for (let i = 0; i < fakeBinaryArray.length; i++) {
        if (fakeBinaryArray[i] == 8206) {
            finalMessage = finalMessage + "0";
        }
        else { finalMessage = finalMessage + "1"; }
    }
    finalMessage = finalMessage.replaceAll("100000", "1000000");
    for (let i = 1; i < finalMessage.length + 1; i++) {
        if (i % 8 == 0) {
            finalMessage = finalMessage.substring(0, i - 1) + " " + finalMessage.substring(i - 1, finalMessage.length);
        }
    }
    let newFinalMessage = finalMessage.split(' ')
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join('');
    newFinalMessage = newFinalMessage.replaceAll("@", " ")
    
    document.getElementById("final-text-output").innerHTML = newFinalMessage;
})