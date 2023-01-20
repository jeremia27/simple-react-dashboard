import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../DummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import LineBarAreaComposedChart from '../../components/chart/LineBarAreaComposedChart'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      {/* <LineBarAreaComposedChart /> */}
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
