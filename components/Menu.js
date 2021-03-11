import { Component } from 'react';
import { MdPhoneIphone } from 'react-icons/md'; 
import { FaArtstation } from 'react-icons/fa'; 
import { ImAddressBook } from 'react-icons/im'; 
import Image from 'next/image';




export default function Menu(props){
  
  
  return (
    <section id = "menu">
      <SvgIvory/>
      <MenuComponent id="work"  svgFrameStopColor1="#ff3b29" svgFrameStopColor2="#ff8c34" strokeColor1="#ff3b29" strokeColor2="#ff8c34" switchMenuExtended={ props.switchMenuExtended } getSetBiggerElem={ props.getSetBiggerElem }/>
      <MenuComponent id="skill" svgFrameStopColor1="#cd4dff" svgFrameStopColor2="#ff4179" strokeColor1="#cd4dff" strokeColor2="#ff4179" switchMenuExtended={ props.switchMenuExtended } getSetBiggerElem={ props.getSetBiggerElem }/>
      <MenuComponent id="paint" svgFrameStopColor1="#ffa934" svgFrameStopColor2="#30ab98" strokeColor1="#ffa934" strokeColor2="#30ab98" switchMenuExtended={ props.switchMenuExtended } getSetBiggerElem={ props.getSetBiggerElem }/>
      <MenuComponent id="info"  svgFrameStopColor1="#ff6ee2" svgFrameStopColor2="#5cd3ff" strokeColor1="#ff6ee2" strokeColor2="#5cd3ff" switchMenuExtended={ props.switchMenuExtended } getSetBiggerElem={ props.getSetBiggerElem } contents={<InfoContent/>} />
    </section>
  )
}

function SvgIvory(){
  return(
    <svg style={{display:'none'}}>
      <defs>
        <linearGradient id="SvgIvory">
          <stop offset="10%" stopColor="ivory"/>
          <stop offset="90%" stopColor="ivory"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function MenuComponent (props){
  
  function onClick(elemId){
    props.switchMenuExtended();
    props.getSetBiggerElem(elemId);
  }
  

  return(
    <li id={props.id}  onClick={(e)=>{onClick(e.currentTarget.id)}}>
      <div className="svgFramePackage">
          <div className="menuText">{props.id.toUpperCase()}</div>
          <div className="neon neon1"></div>
          <div className="neon neon2"></div>
          {/* <SvgFrame 
            id={props.id} 
            svgFrameStopColor1={props.svgFrameStopColor1}
            svgFrameStopColor2={props.svgFrameStopColor2}
            strokeColor1={props.strokeColor1}
            strokeColor2={props.strokeColor2}
          /> */}
      </div>
      <div className="contents">
          {props.contents}
      </div>
    </li>
  )
}

class SvgFrame extends Component{
  constructor(props){
    super(props);
  }
  render(){
    
    return(
      <svg>
        <defs>
          <linearGradient id={`${this.props.id}SvgFrameStopColor`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="10%" stopColor={this.props.svgFrameStopColor1}></stop>
            <stop offset="90%" stopColor={this.props.svgFrameStopColor2}></stop>
          </linearGradient>
        </defs>
        <path id={`${this.props.id}SvgWavy1`} className="wavyPath"  fill="none" stroke={this.props.strokeColor1}/>
        <path id={`${this.props.id}SvgWavy2`} className="wavyPath"  fill="none" stroke={this.props.strokeColor2}/>
        <rect id={`${this.props.id}SvgFrame`}/>
      </svg>
    )
  }
}

function InfoContent(){
  return(
    <>
      <InfoTop/>
      <div id="topBotDivider"/>
      <InfoBot/>
    </>
  )
}

function InfoTop(){
  return(
    <div id="infoTop">
      <div id="myPic">
        <div id="myPicBG"/>
        <div id="myPicImage">
          <Image src="/assets/images/pictures/myPic.jpg" alt="Picture of Sophia" width={512} height={512}/>
        </div>
      </div>
      <main id="myPicInfo">
        <div className="myName">
          <h1 className="nameText">Hi, I'm Sophia</h1>
          <h2 className="nameText">Jiyeon Lee</h2>
        </div>
        <h3 className="position">3D Artist & Frontend Engineer</h3>
      </main>
    </div>
  )
}
function InfoBot(){
  return(
    <div id="infoBot">
      <InfoBotSummary/>
      <InfoBotEducation/>
      <InfoBotContact/>
    </div>
  )
}
function InfoBotSummary(){
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
function InfoBotEducation(){
  return(
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
  )
}
function InfoBotContact(){
  return(
    <div id="contact">
      <div className="heads">WHERE TO FIND ME</div>
      <div className="bodies">
        <nav className="address">
          <MdPhoneIphone/>
          <a href="mailto:jiyeon.sophia.lee@gmail.com" title="email">Email to me here</a>
        </nav>
        <nav className="address">
          <FaArtstation/>
          <a href="https://www.artstation.com/jiyeon_sophia" target="_blank">My Artstation here</a>
        </nav>
        <nav className="address">
          <ImAddressBook/>
          <a href="https://github.com/JiyeonSophiaLee" target="_blank">My Github here</a>
        </nav>
      </div>
    </div>
  )
}