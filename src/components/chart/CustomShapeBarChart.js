import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default function CustomShapeBarChart() {

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
        <div className='customShapeBarChart'>
            <BarChart
                width={400}
                height={400}
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
                <Bar dataKey="amt" fill="#8884d8"  />
                <Bar dataKey="pv" fill="#413ea0"  />
            </BarChart>

        </div>
    )
}
