import React from 'react'
import './widgetLg.css'
import Logo from '../topbar/banteng.png'

export default function WidgetLg() {
  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  };
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transaction</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgeLgTh'>
            Customer
          </th>
          <th className='widgeLgTh'>
            Date
          </th>
          <th className='widgeLgTh'>
            Amount
          </th>
          <th className='widgeLgTh'>
            Status
          </th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetLgImg' alt='' src={Logo}></img>
            <span className='widgetLgName'>Puan</span>
          </td>
          <td className='widgetLgDate'>
            6 Jan 2023
          </td>
          <td className='widgetLgAmount'>
            $122.00
          </td>
          <td className='widgetLgStatus'>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetLgImg' alt='' src={Logo}></img>
            <span className='widgetLgName'>Puan</span>
          </td>
          <td className='widgetLgDate'>
            6 Jan 2023
          </td>
          <td className='widgetLgAmount'>
            $122.00
          </td>
          <td className='widgetLgStatus'>
            <Button type="Declined" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img className='widgetLgImg' alt='' src={Logo}></img>
            <span className='widgetLgName'>Puan</span>
          </td>
          <td className='widgetLgDate'>
            6 Jan 2023
          </td>
          <td className='widgetLgAmount'>
            $122.00
          </td>
          <td className='widgetLgStatus'>
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  )
}
