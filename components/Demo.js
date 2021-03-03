import Image from 'next/image'
import { Component } from 'react'




export default function Demo(){
  return (
    <section id="demo">

        <header id="logo">
            <img id="logo_heigher" src="/assets/images/logo/logo_heigher.svg"/>
            <img id="logo_wider"   src="/assets/images/logo/logo_wider.svg" />
        </header>
        <header id="demoVideo">
            <iframe src="https://player.vimeo.com/video/374348394?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            <div id="demoVideoBgCSSAnim"></div>
        </header>
        <div id="demoSVG" className="blurSVG"></div>

    </section>
  )
}
