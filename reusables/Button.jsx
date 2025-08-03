
import { h, Fragment } from 'preact';
import {styles} from "./Button.styles.js"

export const Button = (props) => {
    return (
        <button className={styles.btn}>
            {props?.label ?? (
                <>
                    <b>ctrl+shift+i</b> {"to open devtools"}
                </>
            )}
        </button>
    )
}
