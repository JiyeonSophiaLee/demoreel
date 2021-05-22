import { memo } from "react/cjs/react.development";
import InfoTop from "./InfoTop.jsx";
import InfoBot from "./InfoBot.jsx";

function InfoContent() {
  console.log("---InfoContent---");
  return (
    <>
      <InfoTop />
      <div id="topBotDivider" />
      <InfoBot />
    </>
  );
}

export default memo(InfoContent);
