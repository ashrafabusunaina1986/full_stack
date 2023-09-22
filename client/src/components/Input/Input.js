import React from 'react'
import classes from './input.module.css'
const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.title}</label>
            <input {...props.input} />
        </div>

    )
}

export default Input