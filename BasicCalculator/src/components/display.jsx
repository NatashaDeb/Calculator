import styles from "./Display.module.css"
function Display({displayShown}){
    return(
        <input className={styles.display} value={displayShown} readOnly></input> 
    )
}

export default Display