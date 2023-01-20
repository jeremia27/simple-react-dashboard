import React from 'react'
import {
    LineStyle, Timeline, TrendingUp,
    PersonOutline,
    Category,
    AccountBalance,
    Assessment,
    Email,
    ModeComment,
    Message,
    HdrStrongSharp,
    BugReport
} from '@material-ui/icons'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to="./" className='link'>
                            <li className='sidebarListItem active'>
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sale
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link to="/user" className='link'>
                            <li className='sidebarListItem'>
                                <PersonOutline
                                    className='sidebarIcon' />
                                User
                            </li>

                        </Link>
                        <Link to="/products" className='link'>
                            <li className='sidebarListItem'>
                                <Category className='sidebarIcon' />
                                Product
                            </li>
                        </Link>
                        <Link to="/transaction" className='link'>
                            <li className='sidebarListItem'>
                                <AccountBalance className='sidebarIcon' />
                                Transaction
                            </li>
                        </Link>

                        <li className='sidebarListItem'>
                            <Assessment className='sidebarIcon' />
                            Report
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notification</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <Email className='sidebarIcon' />
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <ModeComment className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <Message className='sidebarIcon' />
                            Message
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <HdrStrongSharp className='sidebarIcon' />
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <BugReport className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    )
}
