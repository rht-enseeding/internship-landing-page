import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Apexchart = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === 80) {
                    clearInterval(interval);
                    return 80;
                } else {
                    return prevCount + 1;
                }
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                },
            },
        },
        labels: ['Progress'],
    };

    const series = [count];

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="radialBar" height={350} />
            {/* <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '24px' }}>{count}</div> */}
        </div>
    );
};

export default Apexchart;




// import React from 'react';

// import ReactApexChart from 'react-apexcharts';

// class Apexchart extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             series: [70],
//             options: {
//                 chart: {
//                     height: 350,
//                     type: 'radialBar',
//                 },
//                 plotOptions: {
//                     radialBar: {
//                         hollow: {
//                             size: '70%',
//                         }
//                     },
//                 },
//                 labels: ['Progress'],
//             },
//         };
//     }

//     render() {
//         return (
//             <div id="chart">
//                 <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
//             </div>
//         );
//     }
// }

// export default Apexchart;
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
