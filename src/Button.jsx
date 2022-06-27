import React from "react";

function Button({ children, text, bg }) {
  return (
    <div
      className="flex items-center space-x-1 text-sm text-white font-semibold cursor-pointer p-2 px-5 rounded-full"
      style={{
        color: bg ? "white" : "rgb(29,78,216)",
        backgroundColor: bg ? "rgb(29,78,216)" : "white",
        paddingLeft:bg?"":"0px",
        paddingRight:bg?"":"0px"
      }}
    >
      {children}{text}
    </div>
  );
}

export default Button;
