import React from 'react'
import './featuredInfo.css'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Revenue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2,11</span>
                    <span className='featuredMoneyRate'>-2,80
                     <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className='featuredSub'> Compare to Last Month</span>
            </div>

            <div className='featuredItem'>
                <span className='featuredTitle'>Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2,11</span>
                    <span className='featuredMoneyRate'>-2,80 
                    <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className='featuredSub'> Compare to Last Month</span>
            </div>

            <div className='featuredItem'>
                <span className='featuredTitle'>Cost</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2,11</span>
                    <span className='featuredMoneyRate'>+2,80 
                    <ArrowUpward className='featuredIcon'/></span>
                </div>
                <span className='featuredSub'> Compare to Last Month</span>
            </div>

        </div>
    )
}
