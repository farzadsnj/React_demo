import React from "react";

const FRinput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} placeholder='forwardRef'/>
    </div>
  );
});

export default FRinput;
