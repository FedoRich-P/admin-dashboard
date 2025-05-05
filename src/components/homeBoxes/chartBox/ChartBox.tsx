import { Link } from 'react-router';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

export function ChartBox(props: Props) {
  const { color, icon, title, number, percentage, chartData, dataKey } = props;

  return (
    <li className={'p-4 flex gap-2.5 h-full rounded-lg border border-soft-bg'}>
      <div className={'flex flex-col items-start'}>
        <h3 className={'flex mb-auto gap-1 capitalize whitespace-nowrap text-lg'}>
          <img src={icon} alt="icon" />
          {title}
        </h3>
        <p className="mb-1 text-2xl font-semibold">{number}</p>
        <Link to={'/'} className={`text-lg capitalize`} style={{ color }}>
          View all
        </Link>
      </div>
      <article className={'flex flex-1 flex-col'}>
        <div className={'w-full h-full'}>
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none', fontSize: 16 }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 70 }}
              />
              <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          className={`flex flex-col items-end ${percentage < 0 ? 'text-red-600' : 'text-green-600'}`}>
          <span className={`text-lg `}>{percentage}%</span>
          <span className={'text-sm whitespace-nowrap'}>this month</span>
        </div>
      </article>
    </li>
  );
}
