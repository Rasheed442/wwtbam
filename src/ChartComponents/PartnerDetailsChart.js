import React, { useState, useEffect } from "react";
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
  const PartnerD = JSON.parse(localStorage.getItem("PartnerUserId"));
  const token = localStorage.getItem("token");
  const [PartnerDetails, setData] = useState();

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("x-session-id", `${token}`);
    // myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.blkhut.com/wwtbam_v2/getpartners/${PartnerD?.userId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result?.data?.[0]);
      })
      .catch((error) => console.error(error));
  }, []);
  const data = [
    {
      name: "Jan",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.January?.audiencePlayRevenue,
      homePlayRevenuw:
        PartnerDetails?.analyticByGamees?.January?.homePlayRevenuw,
      hostSeatRevenue:
        PartnerDetails?.analyticByGamees?.January?.hostSeatRevenue,
    },

    {
      name: "Feb",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.February?.audiencePlayRevenue,
      homePlayRevenuw:
        PartnerDetails?.analyticByGamees?.February?.homePlayRevenuw,
      hostSeatRevenue:
        PartnerDetails?.analyticByGamees?.February?.hostSeatRevenue,
    },
    {
      name: "Mar",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.March?.audiencePlayRevenue,
      homePlayRevenuw: PartnerDetails?.analyticByGamees?.March?.homePlayRevenuw,
      hostSeatRevenue: PartnerDetails?.analyticByGamees?.March?.hostSeatRevenue,
    },
    {
      name: "Apr",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.April?.audiencePlayRevenue,
      homePlayRevenuw: PartnerDetails?.analyticByGamees?.April?.homePlayRevenuw,
      hostSeatRevenue: PartnerDetails?.analyticByGamees?.April?.hostSeatRevenue,
    },
    {
      name: "May",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.May?.audiencePlayRevenue,
      homePlayRevenuw: PartnerDetails?.analyticByGamees?.May?.homePlayRevenuw,
      hostSeatRevenue: PartnerDetails?.analyticByGamees?.May?.hostSeatRevenue,
    },
    {
      name: "Jun",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.June?.audiencePlayRevenue,
      homePlayRevenuw: PartnerDetails?.analyticByGamees?.June?.homePlayRevenuw,
      hostSeatRevenue: PartnerDetails?.analyticByGamees?.June?.hostSeatRevenue,
    },
    {
      name: "Jul",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.July?.audiencePlayRevenue,
      homePlayRevenuw: PartnerDetails?.analyticByGamees?.July?.homePlayRevenuw,
      hostSeatRevenue: PartnerDetails?.analyticByGamees?.July?.hostSeatRevenue,
    },
    {
      name: "Aug",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.August?.audiencePlayRevenue,
      homePlayRevenuw:
        PartnerDetails?.analyticByGamees?.August?.homePlayRevenuw,
      hostSeatRevenue:
        PartnerDetails?.analyticByGamees?.August?.hostSeatRevenue,
    },
    {
      name: "Sept",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.September?.audiencePlayRevenue,
      homePlayRevenuw:
        PartnerDetails?.analyticByGamees?.September?.homePlayRevenuw,
      hostSeatRevenue:
        PartnerDetails?.analyticByGamees?.September?.hostSeatRevenue,
    },
    {
      name: "Oct",
      audiencePlayRevenue:
        PartnerDetails?.analyticByGamees?.October?.audiencePlayRevenue,
      homePlayRevenuw:
        PartnerDetails?.analyticByGamees?.October?.homePlayRevenuw,
      hostSeatRevenue:
        PartnerDetails?.analyticByGamees?.October?.hostSeatRevenue,
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
    // <ResponsiveContainer width="100%" aspect={1}>
    //   <BarChart
    //     width={500}
    //     height={300}
    //     data={data}
    //     margin={{
    //       top: 5,
    //     }}
    //   >
    //     <CartesianGrid strokeDasharray="3" />
    //     <XAxis
    //       dataKey="name"
    //       axisLine={false}
    //       tickLine={false}
    //       fontSize={14}
    //       fontWeight={500}
    //     />
    //     <YAxis
    //       axisLine={false}
    //       tickLine={false}
    //       fontSize={14}
    //       fontWeight={500}
    //     />
    //     {/* <Tooltip /> */}
    //     {/* <Legend /> */}
    //     <Bar
    //       dataKey="pv"
    //       fill="#4D2087"
    //       barSize={10}
    //       activeBar={<Rectangle fill="pink" stroke="blue" />}
    //       radius={[3, 3, 0, 0]}
    //     />
    //     <Bar
    //       dataKey="pv"
    //       barSize={10}
    //       fill="#9BCF53"
    //       activeBar={<Rectangle fill="pink" stroke="blue" />}
    //       radius={[3, 3, 0, 0]}
    //     />
    //     <Bar
    //       dataKey="pv"
    //       barSize={10}
    //       fill="#FAA300"
    //       activeBar={<Rectangle fill="pink" stroke="blue" />}
    //       radius={[3, 3, 0, 0]}
    //     />
    //   </BarChart>
    // </ResponsiveContainer>
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
  );
}

export default PartnerDetailsChart;
