import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts';

export default function RealTimeChart() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            // generate data baru secara lokal
            const newData = generateNewData();
            setData(data.concat(newData));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function generateNewData() {
        const now = new Date();
        return {
            name: now.toISOString(),
            uv: Math.random(),
        };
    }
    return (
        <div className='realTimeChart'>
            <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>

        </div>
    )
}
