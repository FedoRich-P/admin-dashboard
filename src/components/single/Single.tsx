import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

export const Single = (props: Props) => {
  const { img, title, info, chart, activities } = props;
  return (
    <div className={'grid grid-cols-2'}>
      <div className={'flex flex-col gap-8'}>
        <div className="info">
          <div className={'flex items-center gap-5 mb-4'}>
            {img && <img className={'w-24 h-24 rounded-3xl object-cover'} src={img} alt="" />}
            <h2 className={'font-medium'}>{title}</h2>
            <button>Update</button>
          </div>
          <div className={'flex flex-col gap-3 text-lg'}>
            {Object.entries(info).map((item) => (
              <div key={item[0]}>
                <span className={'capitalize text-soft font-light'}>{item[0]} : </span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className={'w-[90%] h-0 border-0.5 border-soft-bg'} />
        {chart && (
          <div className={'w-[80%] h-[400px]'}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div>
        <h2 className={'mb-5'}>Latest Activities</h2>
        {activities && (
          <ul className={'flex flex-col gap-5'}>
            {activities.map((activity) => (
              <li className={'p-3 relative min-w-98 bg-[#f45b6810]'} key={activity.text}>
                  <p className={'mb-2'}>{activity.text}</p>
                  <time className={'text-xs'}>{activity.time}</time>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};