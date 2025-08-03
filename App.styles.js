
import {css} from "goober"

export const styles = {
    container: css`
        display: grid;
        place-items: center;
        align-items: center; 
        text-align: center;
        height: 600px;
        font-family: sans;
    `,
    header: css`
        font-weight: bold;        
        font-size: 50px;
        padding: 40px 0 20px 0;
    `,
    btn: css`
        font-size: 40px;
    `,
    animateBg: css`
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      background: linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80);
      background-size: 600% 600%;
      animation: gradientShift 8s ease infinite;
    `
}
