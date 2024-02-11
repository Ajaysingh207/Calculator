import React from 'react'
import style from './Display.module.css'
export default function Display({displayValue, onButtonChang}) {
  return (
    <>
        <input type='text' className={style.display} value={displayValue} placeholder='00'  />
    </>
  )
}
