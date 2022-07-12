import React from 'react'
import html from "../assets/html-5.png"
import css from "../assets/css3.png"
import javascript from "../assets/javascript.png"

const Rename = () => {
  return (
    <ul style={{display:"flex", justifyContent:'space-between' , listStyle:"none"}}>
        <li>
            <img src={html}/>
            <img src={css}/>
            <img src={javascript}/>
        </li>
    </ul>
  )
}

export default Rename