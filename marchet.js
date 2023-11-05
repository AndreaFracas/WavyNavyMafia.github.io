const texts = document.querySelectorAll('.percentuale-stock-testo');

texts.forEach((text) => {
    if (text.textContent.includes('+')) {
        text.classList.add('green');
    } else if (text.textContent.includes('-')) {
        text.classList.add('red');
    }
});

var percentageElements = [
    document.getElementById("percentuale1"),
    document.getElementById("percentuale2"),
    document.getElementById("percentuale3"),
    document.getElementById("percentuale4"),
    document.getElementById("percentuale5"),
    document.getElementById("percentuale6"),
    document.getElementById("percentuale7"),
    document.getElementById("percentuale8"),
    document.getElementById("percentuale9"),
    document.getElementById("percentuale10"),
    document.getElementById("percentuale11"),
    document.getElementById("percentuale12"),
    document.getElementById("percentuale13"),
    document.getElementById("percentuale14"),
    document.getElementById("percentuale15"),
    document.getElementById("percentuale16"),
    document.getElementById("percentuale17"),
    document.getElementById("percentuale18"),
    document.getElementById("percentuale19"),
    document.getElementById("percentuale20"),
    document.getElementById("percentuale21"),
    document.getElementById("percentuale22"),
    document.getElementById("percentuale23"),
    document.getElementById("percentuale24"),
    document.getElementById("percentuale25"),
    document.getElementById("percentuale26"),
    document.getElementById("percentuale27"),
];

var stockNames = [
    document.getElementById("NomeStock1").textContent.trim(),
    document.getElementById("NomeStock2").textContent.trim(),
    document.getElementById("NomeStock3").textContent.trim(),
    document.getElementById("NomeStock4").textContent.trim(),
    document.getElementById("NomeStock5").textContent.trim(),
    document.getElementById("NomeStock6").textContent.trim(),
    document.getElementById("NomeStock7").textContent.trim(),
    document.getElementById("NomeStock8").textContent.trim(),
    document.getElementById("NomeStock9").textContent.trim(),
    document.getElementById("NomeStock10").textContent.trim(),
    document.getElementById("NomeStock11").textContent.trim(),
    document.getElementById("NomeStock12").textContent.trim(),
    document.getElementById("NomeStock13").textContent.trim(),
    document.getElementById("NomeStock14").textContent.trim(),
    document.getElementById("NomeStock15").textContent.trim(),
    document.getElementById("NomeStock16").textContent.trim(),
    document.getElementById("NomeStock17").textContent.trim(),
    document.getElementById("NomeStock18").textContent.trim(),
    document.getElementById("NomeStock19").textContent.trim(),
    document.getElementById("NomeStock20").textContent.trim(),
    document.getElementById("NomeStock21").textContent.trim(),
    document.getElementById("NomeStock22").textContent.trim(),
    document.getElementById("NomeStock23").textContent.trim(),
    document.getElementById("NomeStock24").textContent.trim(),
    document.getElementById("NomeStock25").textContent.trim(),
    document.getElementById("NomeStock26").textContent.trim(),
    document.getElementById("NomeStock27").textContent.trim(),
];

var percentages = [];

for (var i = 0; i < percentageElements.length; i++) {
    var text = percentageElements[i].innerHTML;
    var value = parseInt(text);
    percentages.push(value);
}

// Creare un array di oggetti contenenti il nome dello stock e la percentuale
var stockWithPercentages = [];
for (var i = 0; i < percentages.length; i++) {
    stockWithPercentages.push({ name: stockNames[i], percentage: percentages[i] });
}

// Ordina gli oggetti in base alla percentuale in ordine decrescente
stockWithPercentages.sort(function(a, b) {
    return b.percentage - a.percentage;
});

// Estrai i tre oggetti con le percentuali più alte
var largestThree = stockWithPercentages.slice(0, 3);

// Visualizza il risultato
document.getElementById("migliore1").innerHTML = largestThree[0].name;
document.getElementById("migliore2").innerHTML = largestThree[1].name;
document.getElementById("migliore3").innerHTML = largestThree[2].name;



var percentages = [];

for (var i = 0; i < percentageElements.length; i++) {
    var text = percentageElements[i].innerHTML;
    var value = parseInt(text);
    percentages.push(value);
}

// Creare un array di oggetti contenenti il nome dello stock e la percentuale
var stockWithPercentages = [];
for (var i = 0; i < percentages.length; i++) {
    stockWithPercentages.push({ name: stockNames[i], percentage: percentages[i] });
}

// Ordina gli oggetti in base alla percentuale in ordine decrescente
stockWithPercentages.sort(function(a, b) {
    return a.percentage - b.percentage;
});

// Estrai i tre oggetti con le percentuali più alte
var largestThree = stockWithPercentages.slice(0, 3);

// Visualizza il risultato
document.getElementById("peggiore1").innerHTML = largestThree[0].name;
document.getElementById("peggiore2").innerHTML = largestThree[1].name;
document.getElementById("peggiore3").innerHTML = largestThree[2].name;