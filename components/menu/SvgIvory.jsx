import { memo } from "react";

function SvgIvory() {
  console.log("---SvgIvory---");
  return (
    <>
      <linearGradient id="SvgIvory">
        <stop offset="10%" stopColor="ivory" />
        <stop offset="90%" stopColor="ivory" />
      </linearGradient>
    </>
  );
}

export default memo(SvgIvory);
