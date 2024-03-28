import styles from "./Display.module.css"
function Display({displayShown}){
    return(
        <input className={styles.display} placeholder="Enter Expression here" value={displayShown} readOnly></input> 
    )
}

export default Display