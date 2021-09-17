var xmlhttp=new XMLHttpRequest();
const ytems=[];

var url="http://127.0.0.1:5500/StockList.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange= function()
{

    if(this.readyState==4 && this.status==200)
    {
        const data1=JSON.stringify(this.responseText);
        document.write(data1);
       // const data=await data1.text();
       // const{close,open}=data;
        // console.log(close);
        // console.log(open);
    }
     const table=data.split('/[\s,\r\n]+/').slice(1);
     table.forEach(row => {
    const columns=row.split(',');
    document.write(columns[0]);
    document.write(columns[2]);
     });


// getstockdata();

// async function getstockdata()
// {
//     const response=await fetch('http://127.0.0.1:5500/StockList.json');
//     console.log(response);
// }

// "close": 129.41,
//         "high": 133.6116,
//         "low": 126.76,
//         "open": 133.52,
//         "symbol": "AAPL",
//         "volume": 143301887,
//         "id": "HISTORICAL_PRICES",
//         "key": "AAPL",
//         "subkey": "",
//         "date": "2021-01-04",
//         "updated": 1628263122000,
//         "changeOverTime": 0,
//         "marketChangeOverTime": 0,
//         "uOpen": 133.52,
//         "uClose": 129.41,
//         "uHigh": 133.6116,
//         "uLow": 126.76,
//         "uVolume": 143301887,
//         "fOpen": 132.8956,
//         "fClose": 128.8048,
//         "fHigh": 132.9868,
//         "fLow": 126.1672,
//         "fVolume": 143301887,
//         "label": "Jan 4, 21",
//         "change": 0,
//         "changePercent": 0
// const xlabels=[];
// async function chartit(){
// var ctx = document.getElementById('myChart').getContext('2d');

// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//          labels:xlabels,
//         datasets: [{
//             label: '# ohlc',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 // 'rgba(54, 162, 235, 0.2)',
//                 // 'rgba(255, 206, 86, 0.2)',
//                 // 'rgba(75, 192, 192, 0.2)',
//                 // 'rgba(153, 102, 255, 0.2)',
//                 // 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 // 'rgba(54, 162, 235, 1)',
//                 // 'rgba(255, 206, 86, 1)',
//                 // 'rgba(75, 192, 192, 1)',
//                 // 'rgba(153, 102, 255, 1)',
//                 // 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
// }
}
// chartit();
