import React from 'react'
import style from './Buttton.module.css'
export default function Buttton({onButtonClick}) {
  const Buttonss =["C","1","2","3","4","5","6","7","8","9","=","0","/","*","-","+"]
  return (
   <>
    <div className={style.btnCover}>
    {
        Buttonss.map(item=>(
            <button key={item} className={style.btn} onClick={()=>onButtonClick(item)} >{item}</button>
        )) 
    }
        
        
      
    </div>
   </>
  )
}
