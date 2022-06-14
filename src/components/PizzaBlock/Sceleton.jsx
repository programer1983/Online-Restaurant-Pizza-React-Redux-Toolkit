import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="320" cy="252" r="10" /> 
    <rect x="-7" y="295" rx="0" ry="0" width="5" height="46" /> 
    <rect x="6" y="272" rx="10" ry="10" width="260" height="21" /> 
    <circle cx="135" cy="129" r="126" /> 
    <rect x="-3" y="318" rx="10" ry="10" width="280" height="88" /> 
    <rect x="124" y="424" rx="25" ry="25" width="146" height="45" /> 
    <rect x="49" y="441" rx="0" ry="0" width="17" height="2" /> 
    <rect x="144" y="500" rx="10" ry="10" width="95" height="30" /> 
    <rect x="1" y="425" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
)

export default Sceleton
