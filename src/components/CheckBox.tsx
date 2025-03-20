import React from 'react'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
  disabled?: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label
      className={`
        flex items-center cursor-pointer select-none 
        rounded px-3 py-2 
        border border-gray-300
        text-sm
        bg-white
        hover:bg-gray-100
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="peer sr-only"
      />
      {/* Custom checkruta */}
      <span
        className={`
          inline-block w-5 h-5 mr-2 rounded border 
          border-gray-400 
          flex-shrink-0 
          peer-checked:bg-blue-500 
          peer-checked:border-transparent
          peer-checked:before:content-['✓'] 
          peer-checked:before:text-white 
          peer-checked:before:block 
          peer-checked:before:text-center
        `}
      />
      {/* Label text */}
      <span>{label}</span>
    </label>
  )
}

export default Checkbox