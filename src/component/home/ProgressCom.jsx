import React from "react";
import ProgressCard from "../cards/ProgressCard";

function ProgressCom() {
  return (
    <div className="row">
      <ProgressCard
        count="4000"
        name="Total Employees"
        progressSettings={{
          value: 11.5,
          maxValue: 100,
          
        }}
      />
      <ProgressCard
        count="100"
        name="Leave Applications"
        color="#EF5DA8"
        progressSettings={{
          value: 34.4,
          maxValue: 100,
          style: {
            trailColor: "#FCDFEE",
          },
        }}
      />
      <ProgressCard
        count="250"
        name="Industrial Attachment Applications"
        color="#27AE60"
        progressSettings={{
          value: 54.2,
          maxValue: 100,
          style: {
            trailColor: "#D4EFDF",
          },
        }}
      />
      <ProgressCard
        count="4"
        name="Registered Sources"
        color="#9B51E0"
        progressSettings={{
          value: 77.5,
          maxValue: 100,
          style: {
            trailColor: "#EBDCF9",
          },
        }}
      />
    </div>
  );
}

export default ProgressCom;
