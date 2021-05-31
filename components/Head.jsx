import { useThree } from "@react-three/fiber";
import Head from "next/head";
import {useEffect} from "react";


const prefix = process.env.NEXT_PUBLIC_PREFIX || "";


export default function _Head() {
  // useEffect(()=>{
  //   async function loadFonts() {
  //     const GathaSans_font = new FontFace('GathaSans', `url(${prefix}/assets/fonts/GathaSans.ttf)`);
  //     const theboldfont_font = new FontFace('theboldfont', `url(${prefix}/assets/fonts/theboldfont.woff)`);

  //     await GathaSans_font.load();
  //     await theboldfont_font.load();
      
  //     document.fonts.add(GathaSans_font);
  //     document.fonts.add(theboldfont_font);
  //   }
  //   loadFonts();
  // },[])

  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Sophia JiyeonLee's personal demo webstie who is 3D artist and fronted engineer."
      />
      <meta
        name="keywords"
        content="3D Artist,Fonted Engeener,3d,maya,javscript,demo"
      />
      <meta name="auto" content="Sophia Jiyeon Lee" />
      <title>Sophia Jiyeon Personal Demo Website</title>
      <link
        rel="preload"
        href="/assets/fonts/GathaSans.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/assets/fonts/theboldfont.woff"
        as="font"
        crossOrigin=""
      />
    </Head>
  );
}
