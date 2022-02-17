import React, { useEffect, useRef } from 'react';

export default function Header({children}) {
  const cursorDiv = useRef(null)
  let cursorTimeout = null;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', function(e) {
        e.stopImmediatePropagation()

        if(e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') {
          clearTimeout(cursorTimeout)

          cursorDiv.current.classList.add('--shadow')
          cursorDiv.current.style.top = `${e.pageY}px`
          cursorDiv.current.style.left = `${e.pageX}px`

          cursorTimeout = setTimeout(() => {
            cursorDiv.current.classList.remove('--shadow')
          }, 200);
        }
      }, true)
    }
  })

    return (
      <>
        <header>
          <h1>Micro-animaties</h1>
          {children}
        </header>

        <div className='cursor' ref={cursorDiv}></div>
      </>
    )
}