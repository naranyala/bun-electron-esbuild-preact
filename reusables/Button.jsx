
import { h, Fragment } from 'preact';
// import {styles} from "./Button.styles.js"
import { css } from "goober"

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

export const styles = {
  btn: css`
        background: white;
        border-radius: 20px;
        padding: 20px;

        &:hover { background: lightgray; }
    `
}
