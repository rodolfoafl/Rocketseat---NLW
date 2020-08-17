import React, { SelectHTMLAttributes } from "react";

import "./style.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} autoComplete="off" {...rest}>
        <option value="" selected disabled hidden>
          Selecione uma matéria
        </option>
        {options.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
              label={option.label}
            ></option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
