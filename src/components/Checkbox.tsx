// import React from 'react'
//
// interface ClickableItemProps {
//   label: string
//   selected: boolean
//   onChange: () => void
//   disabled?: boolean
// }
//
// const Checkbox: React.FC<ClickableItemProps> = ({
//   label,
//   selected,
//   onChange,
//   disabled = false,
// }) => {
//   return (
//     <div
//       onClick={disabled ? undefined : onChange}
//       className={`
//         cursor-pointer select-none rounded px-3 py-2 border text-sm transition-colors
//         ${selected ? 'bg-blue-500 text-white border-transparent' : 'bg-white text-black border-gray-300'}
//         ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
//       `}
//     >
//       {label}
//     </div>
//   )
// }
//
// export default Checkbox
