import { useState } from "react";

interface Option {
  value: any;
  label: string;
}

const Select: React.FC<{ options: Option[]; label: string }> = ({
  options,
  label
}) => {
  const [value, setValue] = useState<any>(undefined);
  return (
    <>
      <label>{label}</label>
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
