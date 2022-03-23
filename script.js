const ctx = document.getElementById('chart').getContext('2d');
        const yearChart = [];
        const tempChart = [];
        const nhemChart = [];
        async function drawChart() {
            await getData();
            const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: yearChart,
                datasets: [
                    {
                    label: 'Annual Temperature against Years',
                    data: tempChart,
                    borderColor: ['rgba(255, 99, 132, 1)'],
                    borderWidth: 1
                    },
                    
                    {
                    label: 'NHEM',
                    data: nhemChart,
                    borderColor: ['rgba(129, 50, 32, 1)'],
                    borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
        }
        


        const chartCanvas = document.getElementById('chart');
        async function getData() {
            const response = await fetch('ZonAnn.Ts+dSST.csv');
            const data = await response.text();
            const rows = data.split('\n').slice(1);
            rows.forEach(el => {
                const row = el.split(',');
                const year = row[0];
                const temp = row[1];
                const nhem = row[2];
                yearChart.push(year);
                tempChart.push(+temp + 14)
                nhemChart.push(+nhem + 14);
                // console.log(yearChart, tempChart)
            })
            
        }

        // getData()
        drawChart();