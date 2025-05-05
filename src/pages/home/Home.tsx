import { TopBox } from '../../components/homeBoxes/topBox/TopBox.tsx';
import { ChartBox } from '../../components/homeBoxes/chartBox/ChartBox.tsx';
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from '../../data.tsx';
import { BarChartBox } from '../../components/homeBoxes/barCharBox/BarCharBox.tsx';
import { PieChartBox } from '../../components/homeBoxes/pieChartBox/PieChartBox.tsx';
import { BigChartBox } from '../../components/homeBoxes/bigChartBox/BigChartBox.tsx';

export default function Home() {
  return (
    <ul className="w-full grid gap-5 [grid-template-columns:repeat(4,1fr)] [grid-auto-rows:minmax(180px,auto)]">
      <TopBox/>
      <ChartBox {...chartBoxUser}/>
      <ChartBox {...chartBoxProduct}/>
      <PieChartBox />
      <ChartBox {...chartBoxConversion}/>
      <ChartBox {...chartBoxRevenue}/>
      <BigChartBox/>
      <BarChartBox {...barChartBoxVisit}/>
      <BarChartBox {...barChartBoxRevenue}/>
    </ul>
  );
}
