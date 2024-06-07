import React from "react";
import AdminHistory from "../Components/AdminHistory";
import PartnerHistory from "../Components/PartnerHistory";

function History() {
  const role = localStorage.getItem("role");
  return (
    <div>
      {role === "Admin" && <AdminHistory />}
      {role === "Partner" && <PartnerHistory />}
    </div>
  );
}

export default History;
