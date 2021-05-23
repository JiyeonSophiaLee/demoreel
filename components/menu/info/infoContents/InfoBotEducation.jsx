import { memo } from "react";

function InfoBotEducation() {
  console.log("---InfoBotEducation---");
  return (
    <div id="education">
      <div className="heads">EDUCATION</div>
      <article className="bodies">
        <div className="school">
          <p className="schoolText">Mockwon University</p>
          <p>BA in Animation</p>
          <p className="countryText">South Korea</p>
          <p className="dateText">2007 ~ 2011</p>
        </div>
      </article>
    </div>
  );
}
export default memo(InfoBotEducation);
