import React from "react";
import { Checkbox } from "antd";

//TODO: send props with list options
const optionList = ["test1", "test2", "test3", "test3", "test3", "test3"];

export default ({ options, ...props }) => (
  <div
    className="ant-checkbox-group"
    style={{ display: "inline-block", marginRight: 10 }}
  >
    {options.map(label => (
      <Checkbox
        key={label}
        style={{ display: "block", marginLeft: 0 }}
        // disabled={disabled || false}
        label={label}
        // checked={value}
        // onChange={handleChange}
      >
        {label}
      </Checkbox>
    ))}
  </div>
);
