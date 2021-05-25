import { memo } from "react";

import InfoBotSummary from "./infoContents/InfoBotSummary.jsx";
import InfoBotEducation from "./infoContents/InfoBotEducation.jsx";
import InfoBotContact from "./infoContents/InfoBotContact.jsx";

function InfoBot() {
  console.log("---InfoBot---");
  return (
    <div id="infoBot">
      <InfoBotSummary />
      <InfoBotEducation />
      <InfoBotContact />
    </div>
  );
}

export default memo(InfoBot);
