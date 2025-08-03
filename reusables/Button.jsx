
import {h} from "preact"
import {styles} from "./Button.styles.js"

export const Button = (props) => {
    return (
        <button className={styles.btn}>{props?.label ?? "another button"}</button>
    )
}
