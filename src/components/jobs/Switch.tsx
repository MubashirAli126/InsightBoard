import { useState } from 'react';

type SwitchProps = {
  defaultChecked?: boolean;
};

export default function Switch({ defaultChecked = false }: SwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <button
      onClick={() => setChecked(!checked)}
      className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
        checked ? 'bg-white' : 'bg-gray-200'
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full shadow-md transform transition-transform ${
          checked ? 'translate-x-5' : ''
        }`} style={{backgroundColor:"#F4C7AF"}}
      />
    </button>
  );
}
