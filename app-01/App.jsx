

import { h, render, Fragment } from 'preact';
import {signal, computed, effect} from "@preact/signals"
import {styles} from "./App.styles.js"

import {Button} from "./reusables/Button"

export function App() {
    const count = signal(0)
    const double = computed(() => count.value * 2) 

    const increment = () => count.value++

    effect(() => {
        console.log("count: ", count.value);
        console.log("double: ", double.value);
    })

    return (
        <div className={`${styles.container} ${styles.animateBg}`}>
            <div className={styles.header}>hello from jsx</div>
            <button className={styles.btn} onClick={increment}>
              click {count} - {double}
            </button>

            <hr/>

            <Button/>
        </div>
    )
}

