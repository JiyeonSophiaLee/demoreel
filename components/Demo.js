import style from '../styles/homeLayout.module.scss'
import Image from 'next/image'
import { Component } from 'react'




export default function Demo(){
  return (
    <section className = {style.demo}>

      <header className={style.logo}>
          <img className={style.logo_heigher} src="/assets/images/logo/logo_heigher.svg" height={144} width={144}/>
          <img className={style.logo_wider}   src="/assets/images/logo/logo_wider.svg"   height={144} width={144}/>
      </header>
      <header className={style.demoVideo}>
          <iframe src="https://player.vimeo.com/video/374348394?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
          <div className={style.demoVideoBgCSSAnim}></div>
      </header>
      <div className={`${style.blurSVG} ${style.demoSVG}`}></div>

    </section>
  )
}
