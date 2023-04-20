import React from 'react'

const Message = ({ type, message }) => {
    let bgColor = "";
  let borderColor = "";
  let textColor = "";

  switch (type) {
    case "success":
      bgColor = "bg-green-100";
      borderColor = "border-green-500";
      textColor = "text-green-700";
      break;
    case "warning":
      bgColor = "bg-yellow-100";
      borderColor = "border-yellow-500";
      textColor = "text-yellow-700";
      break;
    case "error":
      bgColor = "bg-red-100";
      borderColor = "border-red-500";
      textColor = "text-red-700";
      break;
    default:
      bgColor = "bg-gray-100";
      borderColor = "border-gray-500";
      textColor = "text-gray-700";
  }
  return (
    <div
      className={`border-l-4 px-4 py-2 ${borderColor} ${bgColor} ${textColor}`}
      role="alert"
    >
      <p className="font-bold">{type.toUpperCase()}</p>
      <p>{message}</p>
    </div>
  )
}

export default Message