import React from 'react'
import './widgetSm.css'
import Logo from '../topbar/banteng.png'
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Member</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' alt='' src={Logo}></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Puan Maharani</span>
                        <span className='widgetSmUserTitle'>Direktur PDIP</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' alt='' src={Logo}></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Puan Maharani</span>
                        <span className='widgetSmUserTitle'>Direktur PDIP</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' alt='' src={Logo}></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Puan Maharani</span>
                        <span className='widgetSmUserTitle'>Direktur PDIP</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' alt='' src={Logo}></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Puan Maharani</span>
                        <span className='widgetSmUserTitle'>Direktur PDIP</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' alt='' src={Logo}></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Puan Maharani</span>
                        <span className='widgetSmUserTitle'>Direktur PDIP</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon'/>
                        Display
                    </button>
                </li>

            </ul>
        </div>
    )
}
