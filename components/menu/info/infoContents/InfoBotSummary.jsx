import { memo } from "react/cjs/react.development"

function InfoBotSummary(){
    console.log('---infoBotSummary---')
    return(
      <div id="summary">
        <div className="heads">WHO AM I</div>
        <article className="bodies">
          <p className="summaryText">I am a 3D Artist, specialised in <strong>lighting</strong>.</p>
          <p className="summaryText">
            I also love to do <strong>modeling, textureing, rigging, animating</strong> and <strong>dynamic things</strong>.<br/>
            Recently, I started to learn code, <strong>Javascript</strong>, for understanding basics of programming a year ago, and I created my webstie by myself which is still in progress.<br/>
            JS librareis that I worked are <strong>ThreeJS</strong> and <strong>Gsap</strong> in this website.
          </p>
        </article>
      </div>
    )
  }

export default memo(InfoBotSummary)