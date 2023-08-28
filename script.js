function generatePrimes() {
    const lower = parseInt(BigInt(document.getElementById("lowerNumber").value));
    const upper = parseInt(BigInt(document.getElementById("upperNumber").value));
    
    if (isNaN(lower) || isNaN(upper)) {
        alert("Please enter valid numbers.");
        return;
    }
    
    if (lower < 2 || upper < 2 || lower >= upper) {
        alert("Invalid range. Please enter positive integers where lower bound is less than upper bound.");
        return;
    }
    
    const primeList = [];
    for (let num = lower; num <= upper; num++) {
        if (isPrime(num)) {
            primeList.push(num);
        }
    }
    
    displayPrimeList(primeList);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function displayPrimeList(primeList) {
    const primeListElement = document.getElementById("primeList");
    primeListElement.textContent = primeList.join(", ");
}

function savePrimeList() {
    const primeListElement = document.getElementById("primeList");
    const primesText = primeListElement.textContent;
    
    const blob = new Blob([primesText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "prime_numbers.txt";
    a.click();
    
    URL.revokeObjectURL(url);
}
