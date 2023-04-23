import React from "react";
import Left from "./Left";
import Right from "./Right";
const MidPart = (props) => {
  return (
    <>
      <div className="midpart-cont flex">
        <Left />
        <Right keym={props.children} />
      </div>
    </>
  )
}
export default MidPart;