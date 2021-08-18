import React from "react";

const Parameter = (props: { dataSource: { icon: string; desc: string }[] }) => {
  return (
    <ul>
      {props.dataSource.map((data, index) => {
        return (
          <li key={index} data-testid="param">
            <img src={data.icon} alt="icon" />
            <p>{data.desc}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Parameter;
