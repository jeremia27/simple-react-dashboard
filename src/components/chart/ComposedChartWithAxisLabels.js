import React, { useEffect, useState } from 'react';
import { ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import './composedChartWithAxisLabels.css'

export default function ComposedChartWithAxisLabels() {
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
            pv: Math.random(),
            amt: Math.random(),
        };
    }
    return (
        <div className='composedChartWithAxisLabels'>
            <h3>User Transaction RealTime</h3>
            <ComposedChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </div>
    )
}
