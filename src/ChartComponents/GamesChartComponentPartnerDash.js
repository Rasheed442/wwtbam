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

function GamesChartComponentPartnersDash() {
  const banks = [
    {
      name: "Audience Play Revenue",
      color: "#FB6D48",
    },
    {
      name: "Home Play Revenue",
      color: "#D37676",
    },
    {
      name: "Host Seat Revenue",
      color: "#FF004D",
    },
  ];
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const data = [
    {
      name: "Jan",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.January?.audiencePlayRevenue,
      homePlayRevenuw: userDetails?.analyticByGamees?.January?.homePlayRevenuw,
      hostSeatRevenue: userDetails?.analyticByGamees?.January?.hostSeatRevenue,
    },

    {
      name: "Feb",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.February?.audiencePlayRevenue,
      homePlayRevenuw: userDetails?.analyticByGamees?.February?.homePlayRevenuw,
      hostSeatRevenue: userDetails?.analyticByGamees?.February?.hostSeatRevenue,
    },
    {
      name: "Mar",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.March?.audiencePlayRevenue,
      homePlayRevenuw: userDetails?.analyticByGamees?.March?.homePlayRevenuw,
      hostSeatRevenue: userDetails?.analyticByGamees?.March?.hostSeatRevenue,
    },
    {
      name: "Apr",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.April?.audiencePlayRevenue,
      homePlayRevenuw: userDetails?.analyticByGamees?.April?.homePlayRevenuw,
      hostSeatRevenue: userDetails?.analyticByGamees?.April?.hostSeatRevenue,
    },
    {
      name: "May",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.May?.audiencePlayRevenue,
      homePlayRevenuw: userDetails?.analyticByGamees?.May?.homePlayRevenuw,
      hostSeatRevenue: userDetails?.analyticByGamees?.May?.hostSeatRevenue,
    },
    {
      name: "Jun",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.June?.audiencePlayRevenue,
      homePlayRevenuw: userDetails?.analyticByGamees?.June?.homePlayRevenuw,
      hostSeatRevenue: userDetails?.analyticByGamees?.June?.hostSeatRevenue,
    },
    {
      name: "Jul",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.July?.audiencePlayRevenue,
      homePlayRevenuw: userDetails?.analyticByGamees?.July?.homePlayRevenuw,
      hostSeatRevenue: userDetails?.analyticByGamees?.July?.hostSeatRevenue,
    },
    {
      name: "Aug",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.August?.audiencePlayRevenue,
      homePlayRevenuw: userDetails?.analyticByGamees?.August?.homePlayRevenuw,
      hostSeatRevenue: userDetails?.analyticByGamees?.August?.hostSeatRevenue,
    },
    {
      name: "Sept",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.September?.audiencePlayRevenue,
      homePlayRevenuw:
        userDetails?.analyticByGamees?.September?.homePlayRevenuw,
      hostSeatRevenue:
        userDetails?.analyticByGamees?.September?.hostSeatRevenue,
    },
    {
      name: "Oct",
      audiencePlayRevenue:
        userDetails?.analyticByGamees?.October?.audiencePlayRevenue,
      homePlayRevenuw: userDetails?.analyticByGamees?.October?.homePlayRevenuw,
      hostSeatRevenue: userDetails?.analyticByGamees?.October?.hostSeatRevenue,
    },
    // {
    //   name: "Nov",
    //   audiencePlayRevenue:
    //     userDetails?.analyticByGamees?.November?.audiencePlayRevenue,
    //   homePlayRevenuw: userDetails?.analyticByGamees?.November?.homePlayRevenuw,
    //   hostSeatRevenue: userDetails?.analyticByGamees?.November?.hostSeatRevenue,
    // },
    // {
    //   name: "Dec",
    //   audiencePlayRevenue:
    //     userDetails?.analyticByGamees?.December?.audiencePlayRevenue,
    //   homePlayRevenuw: userDetails?.analyticByGamees?.December?.homePlayRevenuw,
    //   hostSeatRevenue: userDetails?.analyticByGamees?.December?.hostSeatRevenue,
    // },
  ];
  return (
    <Hill>
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
              dataKey="audiencePlayRevenue"
              barSize={10}
              fill="#FB6D48"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="homePlayRevenuw"
              barSize={10}
              fill="#D37676"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="hostSeatRevenue"
              fill="#FF004D"
              barSize={10}
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Hill>
  );
}

export default GamesChartComponentPartnersDash;
const Hill = styled.div`
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
