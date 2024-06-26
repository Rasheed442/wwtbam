// import React from "react";
// import { Table, TableColumnProps } from "@arco-design/web-react";
// import "@arco-design/web-react/dist/css/arco.css";

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Salary",
//     dataIndex: "salary",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "Jane Doe",
//     salary: 23000,
//     address: "32 Park Road, London",
//     email: "jane.doe@example.com",
//   },
//   {
//     key: "2",
//     name: "Alisa Ross",
//     salary: 25000,
//     address: "35 Park Road, London",
//     email: "alisa.ross@example.com",
//   },
//   {
//     key: "3",
//     name: "Kevin Sandra",
//     salary: 22000,
//     address: "31 Park Road, London",
//     email: "kevin.sandra@example.com",
//   },
//   {
//     key: "4",
//     name: "Ed Hellen",
//     salary: 17000,
//     address: "42 Park Road, London",
//     email: "ed.hellen@example.com",
//   },
//   {
//     key: "5",
//     name: "William Smith",
//     salary: 27000,
//     address: "62 Park Road, London",
//     email: "william.smith@example.com",
//   },
//   {
//     key: "5",
//     name: "William Smith",
//     salary: 27000,
//     address: "62 Park Road, London",
//     email: "william.smith@example.com",
//   },
// ];

// const App = () => {
//   return <Table columns={columns} data={data} />;
// };

// export default App;
import React, { useState } from "react";
import Select from "react-select";

const GamesPlay = [
  {
    games: "hotseat",
  },
  {
    games: "Homeseat",
  },
  {
    games: "Audienceseat",
  },
];

export default () => {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={{ value: "hotseat", label: "Hotseat" }}
        name="color"
        options={GamesPlay.map((d) => ({
          value: d.games,
          label: d.games.charAt(0).toUpperCase() + d.games.slice(1),
        }))}
      />
    </>
  );
};
