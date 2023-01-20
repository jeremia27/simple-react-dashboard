import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import Logo from './banteng.png'
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>KULI DEV V.0</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img src={Logo} alt='' className='topAvatar'/>
                </div>

            </div>
        </div>
    )
}
