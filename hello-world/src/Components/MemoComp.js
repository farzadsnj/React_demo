import React from "react";

function MemoComp({ name }) {
  console.log("RenderComp");
  return <div>{name} + farzad</div>;
}

export default React.memo(MemoComp);
