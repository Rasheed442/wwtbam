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

function ChannelChartComponentPartnersDash() {
  const banks = [
    {
      name: "App Game Revenue",
      color: "#FB923C",
    },
    {
      name: "Pos Game Revenue",
      color: "#CBC7C6",
    },
    {
      name: "Web Game Revenue",
      color: "#7694E0",
    },
  ];
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const data = [
    {
      name: "Jan",
      appGameRevenue:
        userDetails?.analyticByGameChannels?.January?.appGameRevenue,
      posGameRevenue:
        userDetails?.analyticByGameChannels?.January?.posGameRevenue,
      webGameRevenue:
        userDetails?.analyticByGameChannels?.January?.webGameRevenue,
    },
    {
      name: "Feb",
      appGameRevenue:
        userDetails?.analyticByGameChannels?.February?.appGameRevenue,
      posGameRevenue:
        userDetails?.analyticByGameChannels?.February?.posGameRevenue,
      webGameRevenue:
        userDetails?.analyticByGameChannels?.February?.webGameRevenue,
    },
    {
      name: "Mar",
      appGameRevenue:
        userDetails?.analyticByGameChannels?.March?.appGameRevenue,
      posGameRevenue:
        userDetails?.analyticByGameChannels?.March?.posGameRevenue,
      webGameRevenue:
        userDetails?.analyticByGameChannels?.March?.webGameRevenue,
    },
    {
      name: "Apr",
      appGameRevenue:
        userDetails?.analyticByGameChannels?.April?.appGameRevenue,
      posGameRevenue:
        userDetails?.analyticByGameChannels?.April?.posGameRevenue,
      webGameRevenue:
        userDetails?.analyticByGameChannels?.April?.webGameRevenue,
    },
    {
      name: "May",
      appGameRevenue: userDetails?.analyticByGameChannels?.May?.appGameRevenue,
      posGameRevenue: userDetails?.analyticByGameChannels?.May?.posGameRevenue,
      webGameRevenue: userDetails?.analyticByGameChannels?.May?.webGameRevenue,
    },
    {
      name: "Jun",
      appGameRevenue: userDetails?.analyticByGameChannels?.June?.appGameRevenue,
      posGameRevenue: userDetails?.analyticByGameChannels?.June?.posGameRevenue,
      webGameRevenue: userDetails?.analyticByGameChannels?.June?.webGameRevenue,
    },
    {
      name: "Jul",
      appGameRevenue: userDetails?.analyticByGameChannels?.July?.appGameRevenue,
      posGameRevenue: userDetails?.analyticByGameChannels?.July?.posGameRevenue,
      webGameRevenue: userDetails?.analyticByGameChannels?.July?.webGameRevenue,
    },
    {
      name: "Aug",
      appGameRevenue:
        userDetails?.analyticByGameChannels?.August?.appGameRevenue,
      posGameRevenue:
        userDetails?.analyticByGameChannels?.August?.posGameRevenue,
      webGameRevenue:
        userDetails?.analyticByGameChannels?.August?.webGameRevenue,
    },
    {
      name: "Sep",
      appGameRevenue:
        userDetails?.analyticByGameChannels?.September?.appGameRevenue,
      posGameRevenue:
        userDetails?.analyticByGameChannels?.September?.posGameRevenue,
      webGameRevenue:
        userDetails?.analyticByGameChannels?.September?.webGameRevenue,
    },
    {
      name: "Oct",
      appGameRevenue:
        userDetails?.analyticByGameChannels?.October?.appGameRevenue,
      posGameRevenue:
        userDetails?.analyticByGameChannels?.October?.posGameRevenue,
      webGameRevenue:
        userDetails?.analyticByGameChannels?.October?.webGameRevenue,
    },
    //    {
    //   name: "Nov",
    //   appGameRevenue:
    //     userDetails?.analyticByGameChannels?.November?.appGameRevenue,
    //   posGameRevenue:
    //     userDetails?.analyticByGameChannels?.November?.posGameRevenue,
    //   webGameRevenue:
    //     userDetails?.analyticByGameChannels?.November?.webGameRevenue,
    // },
    //    {
    //   name: "Dec",
    //   appGameRevenue:
    //     userDetails?.analyticByGameChannels?.Decmber?.appGameRevenue,
    //   posGameRevenue:
    //     userDetails?.analyticByGameChannels?.December?.posGameRevenue,
    //   webGameRevenue:
    //     userDetails?.analyticByGameChannels?.December?.webGameRevenue,
    // },
  ];
  return (
    <Hills>
      <div className="header">
        <div className="selection">
          <div className="overhead">
            <h2>Channels</h2>
            <p>
              Shows a snapshot of customer registration types on your system
            </p>
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
                  className="lines"
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
              dataKey="appGameRevenue"
              barSize={10}
              fill="#FB923C"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="posGameRevenue"
              barSize={10}
              fill="#CBC7C6"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="webGameRevenue"
              fill="#7694E0"
              barSize={10}
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Hills>
  );
}

export default ChannelChartComponentPartnersDash;
const Hills = styled.div`
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
    display: none;
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
  .lines {
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
