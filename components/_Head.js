import Head from 'next/head'
import Link from "next/link";

export default function _Head(){
  return(
    <Head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Sophia JiyeonLee's personal demo webstie who is 3D artist and fronted engineer."/>
      <meta name="keywords" content="3D Artist,Fonted Engeener,3d,maya,javscript,demo"/>
      <meta name="auto" content="Sophia Jiyeon Lee"/>
      <title>Sophia Jiyeon Personal Demo Website</title>
      <link rel="preload"
            href="/assets/fonts/GathaSans.ttf"
            as="font"
            crossOrigin=""/>
      <link rel="preload"
            href="/assets/fonts/theboldfont.woff"
            as="font"
            crossOrigin=""/>
    </Head>
  )
}