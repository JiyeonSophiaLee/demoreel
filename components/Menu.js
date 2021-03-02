import { Component } from 'react';
import { MdPhoneIphone } from 'react-icons/md'; 
import { FaArtstation } from 'react-icons/fa'; 
import { ImAddressBook } from 'react-icons/im'; 
import Image from 'next/image';
import homeLayoutStyle from '../styles/homeLayout.module.scss';
import infoLayoutStyle from '../styles/infoLayout.module.scss';




export default function Menu(){
  return (
    <section className = {homeLayoutStyle.menu}>
      <SvgIvory/>
      <MenuComponent name={homeLayoutStyle.work}  svgFrameStopColor1="#ff3b29" svgFrameStopColor2="#ff8c34" strokeColor1="#ff3b29" strokeColor2="#ff8c34"/>
      <MenuComponent name={homeLayoutStyle.skill} svgFrameStopColor1="#cd4dff" svgFrameStopColor2="#ff4179" strokeColor1="#cd4dff" strokeColor2="#ff4179"/>
      <MenuComponent name={homeLayoutStyle.paint} svgFrameStopColor1="#ffa934" svgFrameStopColor2="#30ab98" strokeColor1="#ffa934" strokeColor2="#30ab98"/>
      <MenuComponent name={homeLayoutStyle.info}  svgFrameStopColor1="#ff6ee2" svgFrameStopColor2="#5cd3ff" strokeColor1="#ff6ee2" strokeColor2="#5cd3ff" eachContentsClassName={infoLayoutStyle.infoContents} contents={<InfoContent/>}/>
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

class MenuComponent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li className={this.props.name}>
        <div className={homeLayoutStyle.svgFramePackage}>
            <div className={homeLayoutStyle.menuText}>{this.props.name.split("_")[1].toUpperCase()}</div>
            <div className={`${homeLayoutStyle.neon} neon1`}></div>
            <div className={`${homeLayoutStyle.neon} neon2`}></div>
            <SvgFrame 
              name={this.props.name} 
              svgFrameStopColor1={this.props.svgFrameStopColor1}
              svgFrameStopColor2={this.props.svgFrameStopColor2}
              strokeColor1={this.props.strokeColor1}
              strokeColor2={this.props.strokeColor2}
            />
        </div>
        <div className={`${homeLayoutStyle.contents} ${this.props.eachContentsClassName}`}>
            {this.props.contents}
        </div>
      </li>
    )
  }
}

class SvgFrame extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <svg>
        <defs>
          <linearGradient className={`${this.props.name.split("_")[1]}SvgFrameStopColor`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="10%" stopColor={this.props.svgFrameStopColor1}></stop>
            <stop offset="90%" stopColor={this.props.svgFrameStopColor2}></stop>
          </linearGradient>
        </defs>
        <path className={`${homeLayoutStyle.wavyPath} ${this.props.name.split("_")[1]}SvgWavy1`}  fill="none" stroke={this.props.strokeColor1}/>
        <path className={`${homeLayoutStyle.wavyPath} ${this.props.name.split("_")[1]}SvgWavy2`}  fill="none" stroke={this.props.strokeColor2}/>
        <rect className={`${this.props.name.split("_")[1]}SvgFrame`}/>
      </svg>
    )
  }
}

function InfoContent(){
  return(
    <>
      <InfoTop/>
      <div className={infoLayoutStyle.topBotDivider}/>
      <InfoBot/>
    </>
  )
}

function InfoTop(){
  return(
    <div className={infoLayoutStyle.infoTop}>
      <div className={infoLayoutStyle.myPic}>
        <div className={infoLayoutStyle.myPicBG}>
          <Image className={infoLayoutStyle.myPicImage} src="/assets/images/pictures/myPic.jpg" alt="Picture of Sophia" width={512} height={512}/>
        </div>
      </div>
      <main className={infoLayoutStyle.myPicText}>
        <div className={infoLayoutStyle.myName}>
          <h1 className={infoLayoutStyle.name}>Hi, I'm Sophia</h1>
          <h2 className={infoLayoutStyle.name}>Jiyeon Lee</h2>
        </div>
        <h3 className={infoLayoutStyle.position}>3D Artist & Frontend Engineer</h3>
      </main>
    </div>
  )
}
function InfoBot(){
  return(
    <div className={infoLayoutStyle.infoBot}>
      <InfoBotSummary/>
      <InfoBotEducation/>
      <InfoBotContact/>
    </div>
  )
}
function InfoBotSummary(){
  return(
    <div className={infoLayoutStyle.summary}>
      <div className={infoLayoutStyle.heads}>WHO AM I</div>
      <article className={infoLayoutStyle.bodies}>
        <p className={infoLayoutStyle.summaryText}>I am a 3D Artist, specialised in <strong>lighting</strong>.</p>
        <p className={infoLayoutStyle.summaryText}>
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
    <div className={infoLayoutStyle.education}>
      <div className={infoLayoutStyle.heads}>EDUCATION</div>
      <article className={infoLayoutStyle.bodies}>
        <div className={infoLayoutStyle.school}>
          <p className={infoLayoutStyle.schoolText}>Mockwon University</p>
          <p className={infoLayoutStyle.Mockwon}>BA in Animation</p>
          <p className={infoLayoutStyle.countryText}>South Korea</p>
          <p className={infoLayoutStyle.dateText}>2007 ~ 2011</p>
        </div>
      </article>
    </div>
  )
}
function InfoBotContact(){
  return(
    <div className={infoLayoutStyle.contact}>
      <div className={infoLayoutStyle.heads}>WHERE TO FIND ME</div>
      <div className={infoLayoutStyle.bodies}>
        <nav className={infoLayoutStyle.address}>
          <MdPhoneIphone/>
          <a href="mailto:jiyeon.sophia.lee@gmail.com" title="email">Email to me here</a>
        </nav>
        <nav className={infoLayoutStyle.address}>
          <FaArtstation/>
          <a href="https://www.artstation.com/jiyeon_sophia" target="_blank">My Artstation here</a>
        </nav>
        <nav className={infoLayoutStyle.address}>
          <ImAddressBook/>
          <a href="https://github.com/JiyeonSophiaLee" target="_blank">My Github here</a>
        </nav>
      </div>
    </div>
  )
}