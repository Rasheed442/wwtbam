import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function PartnerDetailsChart() {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 6120,
      pv: 4900,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 4390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 6300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 7300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 8300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" aspect={4}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 7,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          fontSize={14}
          fontWeight={500}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          fontSize={14}
          fontWeight={500}
        />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar
          dataKey="pv"
          fill="#4D2087"
          barSize={10}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="pv"
          barSize={10}
          fill="#9BCF53"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="pv"
          barSize={10}
          fill="#FAA300"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PartnerDetailsChart;
