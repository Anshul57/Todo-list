import React from 'react'
import {useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Fade } from 'react-awesome-reveal'
export const Header = () => {
  // Typed js
  // Typed.js
  const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Things to be done', 'Organize your work', 'To-do List'],
            typeSpeed: 50,
          });
    
      return () => {
        typed.destroy();
      }
    }, [])
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
  return (
    <>
    <Fade direction='up'>
    <div className='header'>
        <h1><span ref ={el} /></h1>
    </div>
    <div className="dateAndTIme">
    <p>{date}, {time}</p>

  </div>
  </Fade>
  
  </>
  )
}
