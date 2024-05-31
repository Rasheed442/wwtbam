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
function PartnerDetailsChart2() {
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
        console.log(result?.data?.[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  const data = [
    {
      name: "Jan",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.January?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.January?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.January?.webGameRevenue,
    },
    {
      name: "Feb",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.February?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.February?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.February?.webGameRevenue,
    },
    {
      name: "Mar",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.March?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.March?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.March?.webGameRevenue,
    },
    {
      name: "Apr",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.April?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.April?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.April?.webGameRevenue,
    },
    {
      name: "May",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.May?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.May?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.May?.webGameRevenue,
    },
    {
      name: "Jun",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.June?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.June?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.June?.webGameRevenue,
    },
    {
      name: "Jul",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.July?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.July?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.July?.webGameRevenue,
    },
    {
      name: "Aug",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.August?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.August?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.August?.webGameRevenue,
    },
    {
      name: "Sep",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.September?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.September?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.September?.webGameRevenue,
    },
    {
      name: "Oct",
      appGameRevenue:
        PartnerDetails?.analyticByGameChannels?.October?.appGameRevenue,
      posGameRevenue:
        PartnerDetails?.analyticByGameChannels?.October?.posGameRevenue,
      webGameRevenue:
        PartnerDetails?.analyticByGameChannels?.October?.webGameRevenue,
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
  );
}

export default PartnerDetailsChart2;
