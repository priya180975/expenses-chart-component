// import data from './data.json' assert { type: 'JSON' };
// console.log(data);



const ctx = document.getElementById('chart').getContext('2d');


fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        labels=data.map(element => {
            return element.day;
        });
        data_values=data.map(element => {
            return element.amount;
        });
        
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data_values,
                    backgroundColor: [
                        'hsl(10, 79%, 65%)'
                    ],
                    borderRadius:5,
                }]
            },
            options: {
                plugins:{
                    legend:{
                        display:false,
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        display:false
                    },
                    x:{
                        grid:{
                            display:false,
                            drawBorder:false
                        }
                    }
                }
            }
        });        

    })

