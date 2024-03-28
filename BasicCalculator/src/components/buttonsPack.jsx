import styles from "./ButtonPack.module.css"
let buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.' ]
function ButtonsPack({onButtonClick}){
    return(
        <div className={styles.buttonsContainer}>
            {buttons.map((ele)=>(
               <button className={styles.button} onClick={ () => onButtonClick(ele)}>{ele}</button> 
            ))}
        </div>
    )
}

export default ButtonsPack