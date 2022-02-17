import { useState } from "react"
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import Header from './components/header'
import AnimSwitcher from "./components/animation-switcher"
import { animations } from "../lib/animations"

import '../styles/globals.css'
import '../styles/animations.scss'

function MyApp({ Component, pageProps, router }) {
  const startIndex = 0;
  const [animation, setAnimation] = useState(animations[startIndex]);
  const [exitBefore, setExitBefore] = useState(false);

  const url = `http://localhost:3000${router.route}`
  return (
      <>
        <Header>
          <AnimSwitcher
            anims={animations}
            setAnimation={setAnimation}
            setExitBeforeEnter={setExitBefore}
            startIndex={startIndex}
          />
        </Header>
        <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <m.div
            key={router.route.concat(animation.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
      </>
    )
}

export default MyApp
