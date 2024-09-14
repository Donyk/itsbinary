document.getElementById('decimal').addEventListener('input', function() {
    updateBinary(this.value);
});

document.getElementById('binary').addEventListener('input', function() {
    updateDecimal(this.value);
});

function increment() {
    let decimal = document.getElementById('decimal');
    decimal.value = parseInt(decimal.value) + 1;
    updateBinary(decimal.value);
}

function resetCounter() {
    document.getElementById('decimal').value = 0;
    document.getElementById('binary').value = 0;
}

function updateBinary(value) {
    document.getElementById('binary').value = parseInt(value).toString(2);
}

function updateDecimal(value) {
    let decimal = parseInt(value, 2);
    if (!isNaN(decimal)) {
        document.getElementById('decimal').value = decimal;
    } else {
        alert("Invalid binary number.");
    }
}
