import styles from "./App.module.css"
import Display from "./components/display"
import ButtonsPack from "./components/buttonsPack"
import { useState } from "react"
function App() {
    let [dispValue, setDispValue] = useState(" ");

    const buttonClick = (buttonText) =>{
        console.log(buttonText)
        if(buttonText === 'C'){
          setDispValue("")
        }
        else if(buttonText === '='){
          let result = eval(dispValue)
          setDispValue(result)
        }
        else{
          let newDispVal = dispValue + buttonText;
          setDispValue(newDispVal)
        }
    }

  return (
    <>
      <div className={styles.calculatorContainer}>
        <h1 className={styles.heading}>Basic Calculator</h1>
        <Display displayShown = {dispValue}></Display>
        <ButtonsPack onButtonClick={buttonClick}></ButtonsPack>
      </div>
    </>
  )
}

export default App
