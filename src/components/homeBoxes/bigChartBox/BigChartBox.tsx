import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { BigChartBoxData } from '../../../data.tsx';

export const BigChartBox = () => {
  return (
    <li className={'py-5 rounded-lg border border-soft-bg col-start-2 col-span-2 row-span-2 flex flex-col'}>
      <h2 className={'text-xl pl-4 mb-auto'}>Revenue Analytics</h2>
      <article className={'w-full h-[300px]'}>
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={BigChartBoxData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <XAxis dataKey="name" tick={{ fontSize: 16 }}/>
            <YAxis tick={{ fontSize: 14 }}/>
            <Tooltip contentStyle={{ fontSize: 16 }}/>
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </article>
    </li>
  );
};
