import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChartBoxData } from '../../../data.tsx';

export const PieChartBox = () => {
  return (
    <li className={'p-5 rounded-lg border border-soft-bg col-start-4 row-span-3 flex flex-col'}>
      <h2 className={'text-xl'}>Leads by Source</h2>
      <div className={'flex items-center justify-center w-full h-full'}>
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px", fontSize: 16 }}
            />
            <Pie
              data={PieChartBoxData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {PieChartBoxData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className={'flex justify-between gap-5 text-sm'}>
        {PieChartBoxData.map((item) => (
          <div className={'text-center'} key={item.name}>
            <h3 className={'mb-1 text-center whitespace-nowrap'}>
              <span className={'inline-block mr-2 w-2.5 h-2.5 rounded-full'} style={{ backgroundColor: item.color }}></span>
              {item.name}
            </h3>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </li>
  );
};