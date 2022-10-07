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
        
        Chart.defaults.font.family = "'DM Sans', sans-serif";        
        Chart.defaults.font.size = 16;
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    data: data_values,
                    backgroundColor:function(context) {
                        if(context.raw==Math.max(...data_values))
                        {
                            return 'hsl(186, 34%, 60%)'
                        }
                        return 'hsl(10, 79%, 65%)'
                    },
                    borderRadius:4,
                    borderSkipped:false,
                }]
            },
            options: {
                plugins:{
                    tooltip: {
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `$${context.raw}`
                            },
                            title:function(context) {
                            }
                        }
                    },
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
                },
                onHover:(e,element)=>{
                    element.length === 1 
                    ? e.native.target.style.cursor = 'pointer'
                    : e.native.target.style.cursor = 'default';
                }
            }
        });        

    })

