import React from "react"

const style = {
  padding: "10px 0",
  borderBottom: "3px solid transparent",
  display: "inline-block",
  cursor: "pointer",
  backgroundColor: "white",
  width: "33.3%",
  color: "rgba(40, 88, 222, .7)",
  textAlign: "center"
}

const activeStyle = {
  ...style,
  color: "rgba(40, 88, 222, .7)",
  borderBottom: "3px solid #6dcac3"
}

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
)

export default CustomTab
