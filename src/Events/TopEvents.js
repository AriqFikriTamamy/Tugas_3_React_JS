import React from "react";

const TopEvents = () => {
  const handleFooter = (value, e) => {
    e.preventDefault()
    alert(value);
  };
  return(
    <div>
      <a href="/" onClick={(e) => handleFooter("Back to Home", e)}>Back to Home</a>
    </div>
  )
}

export default TopEvents;
