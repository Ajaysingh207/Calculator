
import Display from './component/Display'
import style from './App.module.css'
import Buttton from './component/Buttton'
import { useState } from 'react'

function App() {
  const [calval, setcalval] = useState("")
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalval("")

    } else if (buttonText === "=") {
      const result = eval(calval)
      setcalval(result)
    } else {
      const newdisplayvalue = calval + buttonText
      setcalval(newdisplayvalue)
    }
  }
  return (
    <>
      <h1>Calculator</h1>
      <div className={style.calculator}>
        <Display displayValue={calval} />
        <div>
          <Buttton onButtonClick={onButtonClick}  />
        </div>

      </div>

    </>
  )
}

export default App
