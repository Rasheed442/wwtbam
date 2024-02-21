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
import { FaChevronDown } from "react-icons/fa";

function GamesChartComponent() {
  const banks = [
    {
      name: "Daily",
      color: "#5E5ADB",
    },
    {
      name: "Weekly",
      color: "#8784F0",
    },
    {
      name: "Monthly",
      color: "#B9B6FA",
    },
  ];
  const data = [
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
  ];
  return (
    <Head>
      <div className="header">
        <div className="selection">
          <div className="overhead">
            <h2>Games</h2>
            <p>Shows a snapshot of games types on your system</p>
          </div>
          <div className="games">
            <select>
              <option>All Games</option>
            </select>
            <FaChevronDown style={{ color: "#667085" }} size={13} />
          </div>
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
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
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
              barSize={10}
              fill="#5E5ADB"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="pv"
              barSize={10}
              fill="#B9B6FA"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="uv"
              fill="#8784F0"
              barSize={10}
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Head>
  );
}

export default GamesChartComponent;
const Head = styled.div`
  .selection {
    display: flex;
    justify-content: space-between;
  }
  .games {
    border: 1px solid #d0d5dd;
    padding: 0px 10px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 38px;
  }
  .games select {
    border: none;
    appearance: none;

    color: #667085;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    outline: none;
  }
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
