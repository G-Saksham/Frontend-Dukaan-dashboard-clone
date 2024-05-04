export const Dropdown = ({ label, value, options, onChange, className }) => {
    return (
      <div>
        <label>
        {label}
        <select className={className} value = {value} onChange = {onChange}>
          {options.map((option) => (
            <option value = {option.value}>{option.label}</option>
          ))}
        </select>
        </label>
      </div>
    );
   };