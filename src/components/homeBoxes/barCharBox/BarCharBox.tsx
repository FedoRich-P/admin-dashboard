import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

export const BarChartBox = (props: Props) => {
  const {title, color, dataKey, chartData} = props
  return (
    <li className={'p-2 w-full h-full border border-soft-bg'}>
      <h2 className={'text-xl mb-5'}>{title}</h2>
      <article>
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px",  fontSize: 16 }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </article>
    </li>
  );
};