import styles from "./App.module.css"
import Display from "./components/display"
import ButtonsPack from "./components/buttonsPack"
function App() {
  
  return (
    <>
      <div className={styles.calculatorContainer}>
        <h1 className={styles.heading}>Basic Calculator</h1>
        <Display/>
        <ButtonsPack/>
      </div>
    </>
  )
}

export default App
