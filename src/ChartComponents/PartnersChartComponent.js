import React from "react";
import styled from "styled-components";
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
function PartnersChartComponent() {
  const banks = [
    {
      name: "FCMB",
      color: "#4D2087",
    },
    {
      name: "Opay",
      color: "#884FD3",
    },
    {
      name: "Hope PS Bank",
      color: "#A779E2",
    },
    {
      name: "Palmpay",
      color: "#D2BAF2",
    },
  ];
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
    <Head>
      <div className="header">
        <div className="overhead">
          <h2>Partners</h2>
          <p>Shows a snapshot of payment types on your system</p>
        </div>
        <div className="banks">
          {banks?.map((b) => {
            return (
              <div className="content">
                <div
                  className="line"
                  style={{ backgroundColor: b?.color }}
                ></div>
                <p>{b.name}</p>
              </div>
            );
          })}
        </div>
        <ResponsiveContainer width="100%" aspect={4}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
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
              fill="#884FD3"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="pv"
              barSize={10}
              fill="#A779E2"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="uv"
              fill="#D2BAF2"
              barSize={10}
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Head>
  );
}

export default PartnersChartComponent;
const Head = styled.div`
  .content {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .content p {
    color: #464f60;
    line-height: 19px;
    font-size: 13px;
    font-weight: 400;
  }
  .line {
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
  .header {
    background-color: white;
    margin: 20px;
    padding: 20px;
  }
  .overhead {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .overhead p {
    color: #909090;
    letter-spacing: 2%;
    line-height: 19px;
    font-size: 14px;
  }
  .overhead h2 {
    color: #090814;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
  .banks {
    display: flex;
    gap: 30px;
    padding: 40px 0px 30px 0px;
  }
`;
