import React from 'react'

import ComposedChartWithAxisLabels from '../../components/chart/ComposedChartWithAxisLabels'

import LineBarAreaComposedChart from '../../components/chart/LineBarAreaComposedChart'

import './transaction.css'

import TwoLevelPieChart from '../../components/chart/TwoLevelPieChart'

export default function Transaction() {
    return (
        <div className='transaction'>
            <div className='transactionContainer'>
                <h1 className="transactionTitle">National Transaction Eksport Import</h1>
            </div>
            <div className='transactionTop'>
                <div className='transactionTopLeft'>
                    <TwoLevelPieChart />
                </div>
                <div className='transactionTopRight'>
                    <ComposedChartWithAxisLabels />

                </div>
            </div>
            <div className='transactionBottom'>
                {/* <CustomShapeBarChart /> */}
                {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
                <LineBarAreaComposedChart />
            </div>
        </div>
    )
}
