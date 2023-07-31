import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';


const Piechart = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === 100) {
                    clearInterval(interval);
                    return 100;
                } else {
                    return prevCount + 1;
                }
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const data = [
        { name: 'Group A', value: 100 },
        { name: 'Group B', value: 200 },
        { name: 'Group C', value: 150 },
        { name: 'Group D', value: 50 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    // const data = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    // ];
    // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    // demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';
    return (
        <div>



            <PieChart width={300} height={400}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <text x={125} y={205} textAnchor="middle" dominantBaseline="middle" fontSize={24}>
                    {count}
                </text>
            </PieChart>


            {/* previous code --- */}
            {/* <PieChart width={300} height={400} >
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart> */}
            {/* <Pie
                    data={data}
                    cx={420}
                    cy={200}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie> */}
        </div>
    )
}

export default Piechart
