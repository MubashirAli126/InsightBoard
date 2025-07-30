import React from "react";
import { Receipt  } from 'lucide-react';

interface CurrencyDropdownProps {
  selected: "usd" | "pkr";
  onChange: (value: "usd" | "pkr") => void;
}

const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({ selected, onChange }) => (
<div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-fit bg-white shadow-sm">
  <Receipt  className="w-4 h-4 text-gray-500 mr-1" />
  <select
    className="text-sm bg-transparent focus:outline-none"
    value={selected}
    onChange={(e) => onChange(e.target.value as "usd" | "pkr")}
  >
    <option value="usd">USD</option>
    <option value="pkr">PKR</option>
  </select>
</div>
);

export default CurrencyDropdown;
