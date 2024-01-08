var ctx = document.getElementById('Giancasa19').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Set', 'Ott', 'Nov', 'Dic', 'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago'],
        datasets: [{
            label: 'Prezzo',
            data: [999999, 1000050, 1000050],
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});